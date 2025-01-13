type RandomNumberType ={
    value: number
}

type PositveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositveNumber | NegativeNumber | ZeroNumber 


const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
  return (
    <div className="flex justify-center">
      {value}{isPositive && ' positive'} {isNegative && ' negative'}{' '}
      {isZero && ' zero'}
    </div>
  )
}

export default RandomNumber
