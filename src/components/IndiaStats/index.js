import './index.css'

const IndiaStats = props => {
  const {totalConfirmed, totalActive, totalDecesed, totalRecovered} = props

  return (
    <div className="stats-container">
      <div
        className="confirmed-container"
        testid="countryWideConfirmedCases"
      >
        <p> Confirmed </p>
        <img
          src="https://res.cloudinary.com/drnrrd97f/image/upload/v1696231707/hxfkjmjpy0kszd2i1k3q.png"
          alt="country wide confirmed cases pic"
        />
        <p> {totalConfirmed} </p>
      </div>

      <div className="active-container" testid="countryWideActiveCases">
        <p> Active </p>
        <img
          src="https://res.cloudinary.com/drnrrd97f/image/upload/v1696231707/jrkfxfpej7xmlgyydhei.png"
          alt="country wide active cases pic"
        />
        <p> {totalActive} </p>
      </div>

      <div
        className="recovered-container"
        testid="countryWideRecoveredCases"
      >
        <p> Recovered </p>
        <img
          src="https://res.cloudinary.com/drnrrd97f/image/upload/v1696231707/me9yjxblhu80wuvc89ej.png"
          alt="country wide recovered cases pic"
        />
        <p> {totalRecovered} </p>
      </div>

      <div
        className="deceased-container"
        testid="countryWideDeceasedCases"
      >
        <p> Deceased </p>
        <img
          src="https://res.cloudinary.com/drnrrd97f/image/upload/v1696231707/gqoj3q6irgsb95ot3psa.png"
          alt="country wide deceased cases pic"
        />
        <p> {totalDecesed} </p>
      </div>
    </div>
  )
}

export default IndiaStats
