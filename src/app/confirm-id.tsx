'use client'
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useUserContext } from "./context/user.context"

const options = [
  { value: 'fish', label: 'Peixe tropical 🐠' },
  { value: 'dog', label: 'Cachorro 🐕' },
  { value: 'dog_face', label: 'Rosto de Cachorro 🐶' },
  { value: 'bone', label: 'Osso 🦴' },
]

export const ConfirmId = () => {
  const [selected, setSelected] = useState<string>()
  const {identified, setIdentified} = useUserContext()
  const router = useRouter()

  useEffect(() => {
    if(identified) {
      router.push('/apresentacao')
    }
  }, [identified, router])

  const handleConfirm = () => {
    const correct = 'fish'
    if(selected !== correct) {
      toast({
        title: 'Ops!',
        description: 'Quem é você e o que fez com o @sabrexe?',
        variant: 'destructive',
      })
      return
    }

    setIdentified(true)
  }

  return (
    <div className="flex flex-col gap-2 py-10 px-2 flex-1">
      <h1 className="text-2xl font-bold text-center">
        Para @sabrexe
      </h1>
      <p
        className="text-center text-muted-foreground"
      >Primeiro confirme sua identidade</p>
      <div className="flex-1 flex flex-col gap-5 p-2">
        <p
        className="text-center">
          Qual meu emoji no seu celular?
        </p>
        <ul className="flex flex-col gap-2">
          {
            options.map(({ value, label }) => (
              <li key={value} className="flex border border-gray-200
                bg-white 
                has-[:checked]:bg-secondary 
              has-[:checked]:border-blue-300 rounded">
                <label htmlFor={`emoji_${value}`}
                  className="flex-1 p-3"
                >
                  {label}
                  <input type="radio" name="emoji" id={`emoji_${value}`} value={value}
                    onChange={(e) => {
                      if(e.target.checked) {
                        setSelected(e.target.value)
                      }
                    }}
                    className="hidden"
                  />
                </label>
                
              </li>
            ))
          }
        </ul>
        {selected && (
          <button
            className="bg-primary text-primary-foreground rounded p-2"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        )}
      </div>
    </div>
  )
}