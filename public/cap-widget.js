// Minimal CapJS Widget Implementation
// This is a simplified version that provides basic proof-of-work functionality

(function() {
    'use strict';
    
    // Simple proof-of-work implementation
    function solveChallenge(challenge, difficulty) {
        let nonce = 0;
        const target = '0'.repeat(difficulty);
        
        while (true) {
            const hash = sha256(challenge + nonce);
            if (hash.startsWith(target)) {
                return {
                    challenge: challenge,
                    nonce: nonce,
                    hash: hash
                };
            }
            nonce++;
        }
    }
    
    // Simple SHA-256 implementation (simplified)
    function sha256(str) {
        // This is a very basic implementation for demo purposes
        // In production, you'd want to use a proper crypto library
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(16).padStart(8, '0').repeat(8);
    }
    
    // CapJS Widget Class
    class CapWidget {
        constructor(element, options = {}) {
            this.element = element;
            this.options = options;
            this.isSolved = false;
            this.token = null;
            
            this.init();
        }
        
        init() {
            this.element.innerHTML = `
                <div class="cap-widget-container" style="
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 10px;
                    text-align: center;
                    background: #f9f9f9;
                    font-family: Arial, sans-serif;
                ">
                    <div class="cap-widget-status" style="margin-bottom: 10px;">
                        <span class="cap-widget-text">Click to verify you're human</span>
                    </div>
                    <button class="cap-widget-button" style="
                        background: #007cba;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                    ">Verify</button>
                </div>
            `;
            
            this.button = this.element.querySelector('.cap-widget-button');
            this.status = this.element.querySelector('.cap-widget-text');
            
            this.button.addEventListener('click', () => this.solve());
        }
        
        async solve() {
            if (this.isSolved) return;
            
            this.button.disabled = true;
            this.status.textContent = 'Solving challenge...';
            
            try {
                // Get challenge from server
                const response = await fetch(this.options.challengeUrl || '/cap-challenge');
                const challengeData = await response.json();
                
                // Solve the challenge
                const solution = solveChallenge(challengeData.challenge, challengeData.difficulty);
                
                // Create token
                this.token = JSON.stringify(solution);
                this.isSolved = true;
                
                // Update UI
                this.status.textContent = '✓ Verified';
                this.button.textContent = 'Verified';
                this.button.style.background = '#28a745';
                
                // Call success callback
                if (this.options.onSuccess) {
                    this.options.onSuccess(this.token);
                }
                
            } catch (error) {
                console.error('CapJS Error:', error);
                this.status.textContent = 'Verification failed';
                this.button.disabled = false;
                
                if (this.options.onError) {
                    this.options.onError(error);
                }
            }
        }
        
        reset() {
            this.isSolved = false;
            this.token = null;
            this.init();
        }
    }
    
    // Global CapJS API
    window.cap = {
        render: function(element, options) {
            return new CapWidget(element, options);
        },
        reset: function(element) {
            const widget = element._capWidget;
            if (widget) {
                widget.reset();
            }
        }
    };
    
    // Auto-initialize widgets on page load
    document.addEventListener('DOMContentLoaded', function() {
        const widgets = document.querySelectorAll('.cap-widget');
        widgets.forEach(widget => {
            if (!widget._capWidget) {
                widget._capWidget = new CapWidget(widget, {
                    challengeUrl: '/cap-challenge'
                });
            }
        });
    });
    
})();