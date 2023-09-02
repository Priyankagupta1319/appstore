// Write your code here

const AppItem = props => {
  const {AppItemdetails} = props
  const {appName, imageUrl} = AppItemdetails
  return (
    <li>
      <img src={imageUrl} alt={appName} />
      <p className="Name">{appName}</p>
    </li>
  )
}
export default AppItem
