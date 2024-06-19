import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value,setValue] = useState("");
  const [searches, setSearches] = useState([]);
  const onCoinsChange = (e) => {
      setValue(e.target.value)
  };
  const onBtnSubmit = (e) => {
      e.preventDefault()
      console.log(`input value값 : ${value}`)
      setSearches([value, ...searches])
      //왜 여기서는 배열에 안찍힐까.,..???? 함수가 끝나야만 searches가 업데이트되는건가..?
      console.log(`검색버튼 클릭시 검색어 배열: ${searches}`)
      setValue("")
      const updateCoins = coins.filter(coin => coin.name === value)
      setCoins(updateCoins);
  }
  // useEffect(() => {
  //   fetch('https://api.coinpaprika.com/v1/tickers')
  //       .then(response => response.json())
  //       .then((json) =>{
  //         console.log(json);
  //         setCoins(json)
  //         setLoading(false)
  //       });
  // },[]);
  const fetchData = async() => {
      setLoading(true);
      try{
          const response = await fetch('https://api.coinpaprika.com/v1/tickers');
          const json = await response.json();
          setCoins(json);
      } catch (error) {
          console.error(`Error fetching coins:${error}`);
      } finally{
          setLoading(false);
      }
  }
  useEffect(() => {
      fetchData()
  }, []);


  const onDltBtnClick = (index) =>{
      const updatedSearches = searches.filter((_, current) => current !== index);
      setSearches(updatedSearches);
      console.log(`삭제버튼 클릭시 검색어 배열: ${searches}`);
  };
  useEffect(() => {
    console.log(searches.length)
    console.log(`searches : ${searches}`)
  },[searches])

  return (
      <div className="App">
          {loading ? <h1>//로딩중....//</h1>
              : <form onSubmit={onBtnSubmit}>
                  <input value={value} onChange={onCoinsChange} placeholder={"이름으로 검색해주세요!"}/>
                  <button>검색하기</button>
              </form>}

          {searches.length > 0 ? (
                  <div>
                      <h2>최근 검색어</h2>
                      <ul>
                          {searches.map((search, index) => <li key={index}>
                              {search}
                              <button onClick={() => onDltBtnClick(index)}>❌</button>
                          </li>)}
                      </ul>
                  </div>
              )
              : null
          }

          <h2>코인리스트({loading ? 0 : coins.length})</h2>
          <ul>
              {coins.map((coin) => <li key={coin.id}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</li>)}
          </ul>
      </div>
  );
}

export default App;
