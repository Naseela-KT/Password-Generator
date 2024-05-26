import { Typography } from "@material-tailwind/react"
import { useState } from "react";

const CharacterLength = () => {
  const [length, setLength] =useState(4);
  return (
    <div className="flex flex-col text-white">
    <div className="flex justify-between mb-2">
      <Typography
        variant="text"
        color="blue-gray"
        className="text-center"
      >
        Length
      </Typography>
      <span>{length}</span> {/* Display the current length value */}
    </div>
    <input
      type="range"
      min="4"
      max="50"
      value={length}
      onChange={(e) => setLength(e.target.value)}
      className="w-full"
    />
  </div>
  )
}

export default CharacterLength