export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Circular Progress Bar */}
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted-foreground/20"
          />
          {/* Animated progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="text-primary animate-pulse"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * 0.7}`}
          />
        </svg>
      </div>
    </div>
  );
}
