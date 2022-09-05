import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MUI from '../muiComponents'
import Button from '@material-ui/core/Button'

type CountryItems = {
  name: {
    common: string
  }
  capital: string[]
  continents: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  population: number
  flags: {
    png: string
  }
}

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 200,
  },
})

const Country = () => {
  const [country, setCountry] = useState<CountryItems>({
    name: {
      common: '',
    },
    capital: [],
    continents: [],
    currencies: {},
    population: 0,
    flags: {
      png: '',
    },
  })

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const url = `https://restcountries.com/v3.1/name/${id}`
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

  console.log(country)
  const currencies = Object.values(country.currencies)[0]

  const classes = useStyles()
  if (!country.name.common) {
    return <MUI.Typography variant="h1">Loading</MUI.Typography>
  }

  return (
    <MUI.Card className={classes.root}>
      <MUI.CardActionArea>
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
            CAPITAL: {country.capital}
          </MUI.Typography>
          {currencies && (
            <MUI.Typography variant="body2" color="textSecondary" component="p">
              CURRENCIES: {currencies.name} - {currencies.symbol}
            </MUI.Typography>
          )}
        </MUI.CardContent>
      </MUI.CardActionArea>
      <MUI.CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            navigate('/')
          }}
        >
          GO BACK
        </Button>
      </MUI.CardActions>
    </MUI.Card>
  )
}

export default Country
