import React, { Component } from 'react';

import image from './images/image.png';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';

import {fetchData} from './api';


class App extends Component{

    state = {
        data: {},
        country: '',
      }
    
      async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
      }
    
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    
      render() {
        const { data, country } = this.state;
    
        return (
          <div className={styles.container}>
            <img className={styles.headingimage} src={image} alt="COVID-19" />
            <h1 className={styles.heading}>Covid-19 Tracker</h1>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
          </div>
        );
      }
    }
    
    export default App;