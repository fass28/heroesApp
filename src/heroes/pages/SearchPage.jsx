import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { HeroCard } from "../components/HeroCard"
import { getHerosByName } from "../helpers/getHerosByName"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)
  const heroes = getHerosByName(q)

  const {searchText,onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit = (e) => {
      e.preventDefault()
      /* if(searchText.trim().length <= 1) return */
      navigate(`?q=${searchText}`)
    }

  return (
    <>
    <h1>SearchPage</h1>
    <hr />

    <div className="row">

      <div className="col-5">
        <h4>searching</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input 
          type="text"
          placeholder="search a Hero"
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
          />
          <button className="btn btn-outline-success mt-1">
            search
          </button>
        </form>

      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />

        {
          (q === '')
          ? <div className="alert alert-primary">Search a hero</div>
          : (heroes.length === 0) && <div className="alert alert-danger">No hero WITH <b>{q}</b></div> 
        }
        
        
        {
          heroes.map(
            hero => (
              <HeroCard key={hero.id} {...hero}/>
            )
          )
        }
      </div>
    </div>
    </>
  )
}
