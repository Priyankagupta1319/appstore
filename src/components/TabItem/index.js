// Write your code here

const TabItem = props => {
  const {TabItemdetails} = props
  const {displaytext} = TabItemdetails
  return (
    <li>
      <button>{displaytext}</button>
    </li>
  )
}
export default TabItem
