/*export default function Content({ content, randomColorOnHover }) {
  return <p className="my-5">{content}</p>
}

*/
const colors = [
  'hover:text-purple-500',
  'hover:text-indigo-500',
  'hover:text-blue-500',
  'hover:text-green-500',
  'hover:text-yellow-500',
  'hover:text-red-500',
]

export default function Content({ content, randomColorOnHover }) {
  let textArray = Array.from(content)
  let seperatedText = []
  let lastIndex = 0
  textArray.forEach((element, index) => {
    if (element === ' ') {
      seperatedText.push(textArray.slice(lastIndex, index))
      lastIndex = index
    }
  })
  seperatedText.push(textArray.slice(lastIndex, textArray.length))

  if (randomColorOnHover == 'true') {
    return (
      <p className="my-5">
        {seperatedText.map((word, index) => (
          <span key={index} className={`${colors[Math.floor(Math.random() * colors.length)]} hover:font-bold transition`}>
            {word}
          </span>
        ))}
      </p>
    )
  } else {
    return <p className="my-5">{content}</p>
  }
}
