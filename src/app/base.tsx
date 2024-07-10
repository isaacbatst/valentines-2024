import { HTMLAttributes } from "react"
import CalendarIcon from "../components/icon/calendar-icon"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/scVndwa3R8N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function BaseComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-background text-foreground">
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