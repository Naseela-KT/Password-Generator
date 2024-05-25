import { Typography } from "@material-tailwind/react"

const CharacterLength = () => {
  return (
    <div className='flex flex-col text-white '>
        <span className='flex justify-between '>
        <Typography
            variant="text"
            color="blue-gray"
            className="mb-3 text-center"
          >
            Length
          </Typography>
        </span>
        <input type="range" min="4" max="50" value={length}/>
      </div>
  )
}

export default CharacterLength