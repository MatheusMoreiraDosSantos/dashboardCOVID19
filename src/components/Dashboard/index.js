import React, {useState, useEffect, useCallback} from 'react';

// format date 
import formatDate from '../../utils/formatDate';

// chart google
import Chart from "react-google-charts";

// components search from material-ul
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// api
import api from '../../service/api_covid';

// loading
import { LinearProgress } from '@material-ui/core';

// components this view
import { 
    Container,
     Info,
     ContainerInfos,
     ContainerSearch,
     ButtonSearch,
     ContainerResultSearch,
     ContainerChart
 } from './styles';

function Dashboard() {

    // data header
    const[newConfirmed, setNewConfirmed] = useState();
    const[totalConfirmed, setTotalConfirmed] = useState();
    const[newDeaths, setNewDeaths] = useState();
    const[newRecovered, setNewRecovered] = useState();
    const[totalRecovered, setTotalRecovered] = useState();

    //Input Options
    const[countries, SetCountries] = useState([]);
    // value search
    const[country, setCountry] = useState([]);
    // result search
    const[resultSearch, setResultSearch] = useState();
    const[day1, setDay1] = useState();
    const[day2, setDay2] = useState();
    const[day3, setDay3] = useState();
    const[day4, setDay4] = useState();
    const[day5, setDay5] = useState();

    
    const[loaded, setLoaded] = useState();

    const loadData = useCallback(() => {
        api.get(`summary`)
            .then((response) => { 
                setNewConfirmed(response.data.Global.NewConfirmed);
                setTotalConfirmed(response.data.Global.TotalConfirmed);
                setNewDeaths(response.data.Global.NewDeaths);
                setNewRecovered(response.data.Global.NewRecovered);
                setTotalRecovered(response.data.Global.TotalRecovered);
                setLoaded(true);
            });
    },[]);

    const loadOptionsCountry = useCallback(() => {
        api.get(`countries`)
            .then((response) => { 
                SetCountries(response.data);
            });
    },[]);

    async function HandleSearch(){
        const response = await 
            api.get(`dayone/country/${country}/status/confirmed`);
        setDay1(response.data[response.data.length-1]);
        console.log(response.data[response.data.length-1])
        setDay2(response.data[response.data.length-2]);
        console.log(response.data[response.data.length-2])
        setDay3(response.data[response.data.length-3]);
        setDay4(response.data[response.data.length-4]);
        setDay5(response.data[response.data.length-5]);
        setResultSearch(response.data[response.data.length-1]);
    }

    useEffect(()=>{
        loadData();
        loadOptionsCountry();
    },[loadData, loadOptionsCountry]);

  return (
    <Container>
        <ContainerInfos>
            <Info>
                <h4>Novos casos confirmados <br/> em todo o mundo <br/>
                    <span>{ 
                        loaded ? newConfirmed : <LinearProgress/> }
                    </span>
                </h4>
            </Info>
            <Info>
                <h4>Total de casos confirmados <br/> em todo o mundo <br/>
                    <span>{ 
                        loaded ? totalConfirmed :  <LinearProgress/> }
                    </span>
                </h4>
            </Info>
            <Info>
                <h4>Novas mortes confirmadas <br/> em todo o mundo <br/>
                    <span>{ 
                        loaded ? newDeaths :  <LinearProgress/> }
                    </span> 
                </h4>
            </Info>
            <Info>
                <h4>Novas recuperações confirmadas <br/> em todo o mundo <br/>
                    <span>{ 
                        loaded ? newRecovered :  <LinearProgress/> }
                    </span> 
                </h4>
            </Info>
            <Info>
                <h4>Total de recuperados <br/> em todo o mundo <br/>
                    <span>{ 
                        loaded ? totalRecovered :  <LinearProgress/> }
                    </span> 
                </h4>
            </Info>
        </ContainerInfos>
        <ContainerSearch>
                <Autocomplete
                    id="combo-box-demo"
                    options={countries}
                    getOptionLabel={(option) => option.Slug}
                    fullWidth={true}
                    onChange={(e, option) => setCountry(option.Slug)}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label="Selecione seu país" 
                            variant="outlined" 
                        />}
                    />
                <ButtonSearch onClick={() => HandleSearch()} >
                    Buscar
                </ButtonSearch>
            </ContainerSearch>
            {
                resultSearch ? (
                    <>
                        <h4>Últimas informações</h4>
                        <ContainerResultSearch>
                            <h4>País <br/>
                                <span>{resultSearch.Country}</span>
                            </h4>
                            <h4>Casos <br/>
                                <span>{resultSearch.Cases}</span>
                            </h4>
                            <h4>Status <br/>
                            <span>{resultSearch.Status}</span>
                            </h4>
                            <h4>Data <br/>
                            <span>{formatDate(resultSearch.Date)}</span>
                            </h4>
                        </ContainerResultSearch>
                        <ContainerChart>
                            <Chart
                                width={'600px'}
                                height={'400px'}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['x', 'Casos'],
                                    ['há 5 dias', day5.Cases],
                                    ['há 4 dias', day4.Cases],
                                    ['há 3 dias', day3.Cases],
                                    ['há 2 dias', day2.Cases],
                                    ['há 1 dias', day1.Cases],
                                ]}
                                options={{
                                    hAxis: {
                                    title: 'Dias',
                                    },
                                    vAxis: {
                                    title: 'Casos',
                                    },
                                }}
                                rootProps={{ 'data-testid': '1' }}
                                />
                        </ContainerChart>
                    </>
                ) : (<></>)
            }
    </Container>
  );
}

export default Dashboard;