// Write your code here
const Teamcard = props => {
  const {eachItem} = props
  const {name, teamImageUrl} = eachItem
  return (
    <li>
      <img src={teamImageUrl} alt={name} />
      <h1>{name}</h1>
    </li>
  )
}

export default Teamcard
