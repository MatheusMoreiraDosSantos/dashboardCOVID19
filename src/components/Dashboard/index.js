import React, {useState, useEffect, useCallback} from 'react';

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
     ContainerResultSearch
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
        setResultSearch(response.data[response.data.length-1])
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
                            <span>{resultSearch.Date}</span>
                            </h4>
                        </ContainerResultSearch>
                    </>
                ) : (<></>)
            }
    </Container>
  );
}

export default Dashboard;