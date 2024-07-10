import React, { useRef } from 'react'
import { Enigma } from './enigmas'
import { useTyped } from '@/hooks/useTyped'
import { useUserContext } from '../context/user.context'

type Props = {
  enigma: Enigma
}

const EnigmaCurrentSolvedNow = (props: Props) => {
  const ref = useRef<HTMLSpanElement>(null)
  const { setSolvedEnigmas } = useUserContext()
  const typed = useTyped(ref, {
    strings: props.enigma.descoberta ?? ['Enigma resolvido! Parabéns!'],
    typeSpeed: 60,
    backDelay: 3000,
    backSpeed: 40,
    onComplete: () => {
      setTimeout(() => {
        setSolvedEnigmas((solvedEnigmas) => [
          ...(solvedEnigmas ?? []),
          props.enigma.id,
        ]);
      }, 5000)
    }
  })

  return (
    <div>
      <span ref={ref}></span>
    </div>
  )
}

export default EnigmaCurrentSolvedNow