import React from 'react';
import Chart from "react-google-charts";


// assets
import rip from '../../assets/rip.png';

import { Container, Info, ContainerInfos } from './styles';

function Map() {
  return (
    <Container>
        <ContainerInfos>
            <Info>
                <h4>Novos casos confirmados <br/> em todo o mundo <br/>
                    <span>241105</span>
                </h4>
            </Info>
            <Info>
                <h4>Total de casos confirmados <br/> em todo o mundo <br/>
                    <span>31016799</span>
                </h4>
            </Info>
            <Info>
                <h4>Novas mortes confirmadas <br/> em todo o mundo <br/>
                    <span>3696</span>
                    <img src={rip} alt='rip' />
                </h4>
            </Info>
            <Info>
                <h4>Total de recuperados <br/> em todo o mundo <br/>
                    <span>21249324</span>
                </h4>
            </Info>
            <Info>
                <h4>Novas recuperações confirmadas <br/> em todo o mundo <br/>
                    <span>235895</span>
                </h4>
            </Info>
        </ContainerInfos>
        
        <Chart
            width={'100%'}
            height={'500px'}
            chartType="GeoChart"
            options={{
                sliceVisibilityThreshold: 0.2, // 20%
                backgroundColor:'transparent',
                title: 'Médias',
                titleTextStyle:{
                color:'#fff'
                },
                legend:{
                    textStyle:{
                        color:'#fff'
                    }
                },
                position: 'relative'
            }}
            data={[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700],
            ]}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="YOUR_KEY_HERE"
            rootProps={{ 'data-testid': '1' }}
        />
    </Container>
  );
}

export default Map;