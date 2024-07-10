'use client'
import { useState } from "react"

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
        className="text-lg font-bold text-primary-foreground"
      >Primeiro confirme sua identidade</p>
      <div className="flex-1 flex flex-col gap-2 p-2">
        <p
        className="text-sm text-muted-foreground">
          Qual meu emoji no seu celular?
        </p>
        <ul>
          <li className="flex p-2 has-[:checked]:bg-secondary has-[:checked]:border has-[:checked]:border-pink-200 rounded">
            <label htmlFor="emoji_fish">
              Peixe tropical 🐠
            </label>
            <input type="radio" name="emoji" id="emoji_fish" value="fish"
            onChange={(e) => {
              if(e.target.checked) {
                setSelected(e.target.value)
              }
            }}
    className="hidden"
    />
          </li>
          <li className="flex p-2 has-[:checked]:bg-secondary has-[:checked]:border has-[:checked]:border-pink-200 rounded">
            <label htmlFor="emoji_dog">
              Cachorro 🐕
            </label>
            <input type="radio" name="emoji" id="emoji_dog" value="dog"
            onChange={(e) => {
              if(e.target.checked) {
                setSelected(e.target.value)
              }
            }}
    className="hidden"
    />
          </li>
          <li className="flex p-2 has-[:checked]:bg-secondary has-[:checked]:border has-[:checked]:border-pink-200 rounded">
            <label htmlFor="emoji_dog_face">
              Rosto de Cachorro 🐶
            </label>
            <input type="radio" name="emoji" id="emoji_dog_face" value="dog_face"
            onChange={(e) => {
              if(e.target.checked) {
                setSelected(e.target.value)
              }
            }}
    className="hidden"
    />
          </li>
          <li className="flex p-2 has-[:checked]:bg-secondary has-[:checked]:border has-[:checked]:border-pink-200 rounded">
            <label htmlFor="emoji_bone">
              Osso 🦴
            </label>
            <input type="radio" name="emoji" id="emoji_bone" value="bone"
            onChange={(e) => {
              if(e.target.checked) {
                setSelected(e.target.value)
              }
            }}
    className="hidden"
    />
          </li>
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