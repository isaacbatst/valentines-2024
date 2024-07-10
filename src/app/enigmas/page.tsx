import CalendarIcon from "../components/calendar-icon";

export default function Enigmas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="max-w-md w-full px-6 py-8 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Para @sabrexe</h1>
          <p className="text-muted-foreground">Descubra o que vamos fazer</p>
          <div className="flex items-center gap-2 text-primary">
            <CalendarIcon className="w-5 h-5" />
            <span>Unlocks until July 12th</span>
          </div>
          <div className="w-full">
            <div className="text-2xl font-bold" />
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}