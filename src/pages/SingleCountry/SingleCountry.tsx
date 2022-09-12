import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import MUI from '../../muiComponents'
import { Country } from '../../types'
import { useStyles } from './SingleCountryStyle'

const SingleCountry = () => {
  const [country, setCountry] = useState<Country>({
    name: {
      common: '',
      official: '',
    },
    capital: [],
    continents: [],
    currencies: {},
    population: 0,
    flags: {
      png: '',
    },
  })

  const classes = useStyles()

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const url = `https://restcountries.com/v3.1/name/${id}?fullText=true`
      async function fetchCountry() {
        const res = await axios.get(url)
        const data = res.data[0]
        setCountry(data)
      }
      fetchCountry()
    } catch (e) {
      console.log('error', e)
    }
  }, [id])

  if (!country.name.common) {
    return <MUI.Typography variant="h5">Loading...</MUI.Typography>
  }

  return (
    <>
      <MUI.Card className={classes.root} elevation={3}>
        <MUI.CardMedia
          className={classes.media}
          image={country.flags.png}
          title={country.name.common}
        />
        <MUI.CardContent>
          <MUI.Typography gutterBottom variant="h5" component="h2">
            {country.name.common}
          </MUI.Typography>
          <MUI.Typography variant="body2" color="textSecondary" component="p">
            CONTINENT: {country.continents}
          </MUI.Typography>
          <MUI.Typography variant="body2" color="textSecondary" component="p">
            {country.capital && country.capital}
            {/* CAPITAL: {capital} */}
          </MUI.Typography>
          {country.currencies && (
            <MUI.Typography variant="body2" color="textSecondary" component="p">
              {country.currencies.name && country.currencies.name} -{' '}
              {country.currencies.symbol && country.currencies.symbol}
              {/* CURRENCIES: {currencies.name} - {currencies.symbol} */}
            </MUI.Typography>
          )}
        </MUI.CardContent>
        <MUI.CardActions>
          <MUI.Button
            size="small"
            color="secondary"
            onClick={() => {
              navigate('/')
            }}
          >
            GO BACK
          </MUI.Button>
        </MUI.CardActions>
      </MUI.Card>
    </>
  )
}

export default SingleCountry
