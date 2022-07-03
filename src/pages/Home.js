import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';
const Home=()=>
{
  const [Input,setInput]=useState('');
  const [results,setResults]=useState(null);
  const onInputChange=(ev)=>{
    setInput(ev.target.value);
      
  }
  const onSearch=()=>{
    apiGet(`/search/shows?q=
    =${Input}`).then(result=>{
      setResults(result);
    });
   
  };

  const onKeyDown=(ev)=>{
    if(ev.keyCode==13)
    {
      onSearch()
    }
    
  };
  
  const renderResults=()=>{
    if(results && results.length===0)
    {
      return <div>No Result</div>
    }
    if(results && results.length>0)
    {
        return <div>{results.map((item)=>
          <div key={item.show.id}>{item.show.name}</div>)}</div>
    }
    return null;
  }
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange}
      onKeyDown={onKeyDown}
      value={Input}/>
      <button type="button" onClick={onSearch}
      >Search</button>
      {renderResults()}
    </MainPageLayout>
  )
};

export default Home