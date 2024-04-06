import {Link} from 'react-router-dom'

import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchSuggestions = props => {
  const {stateName, stateCode} = props

  return (
    <Link className="search-item search" to={`/state/${stateCode}`}>
    <li className="search-item search">
      <p className="state-name"> {stateName} </p>
      <div className="state-code-container">
        <p className="state-code"> {stateCode} </p>
        <BiChevronRightSquare color="#c7cc6f" size={15} />
      </div>
    </li>
    </Link>
  )
}

export default SearchSuggestions
