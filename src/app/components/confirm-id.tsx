'use client'
import { useState } from "react"

const options = [
  { value: 'fish', label: 'Peixe tropical 🐠' },
  { value: 'dog', label: 'Cachorro 🐕' },
  { value: 'dog_face', label: 'Rosto de Cachorro 🐶' },
  { value: 'bone', label: 'Osso 🦴' },
]

export const ConfirmId = () => {
  const [selected, setSelected] = useState<string>()

  const handleConfirm = () => {
    const correct = 'fish'
    if(selected !== correct) {
      alert('Quem é você e o que fez com o @sabrexe?')
      return
    }
  }

  return (
    <div className="flex flex-col gap-2 p-2 flex-1">
      <p
        className="text-2xl text-center font-bold text-primary-foreground"
      >Primeiro confirme sua identidade</p>
      <div className="flex-1 flex flex-col gap-5 p-2">
        <p
        className="text-sm text-muted-foreground text-center">
          Qual meu emoji no seu celular?
        </p>
        <ul className="flex flex-col gap-2">
          {
            options.map(({ value, label }) => (
              <li key={value} className="flex border border-gray-200
                bg-muted 
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