/* $ */
var tableArr = [
  {"name":"金力永磁","id":"300748","buy":"19-5-8","sell":"19-5-30","time":17,"buyPrice":"19.11","sellPrice":"54.27","increase":"14.0%","reason":"稀土永磁"},
  {"name":"丰乐种业","id":"000713","buy":"19-4-30","sell":"19-5-20","time":12,"buyPrice":"6.52","sellPrice":"16.51","increase":"25.2%","reason":"人造肉"},
  {"name":"英洛华","id":"000795","buy":"19-5-8","sell":"19-5-30","time":17,"buyPrice":"4.28","sellPrice":"9.7","increase":"26.6%","reason":"稀土永磁"},
  {"name":"光力科技","id":"300480","buy":"19-5-8","sell":"19-5-29","time":16,"buyPrice":"9.81","sellPrice":"19.8","increase":"10.8%","reason":"芯片概念"},
  {"name":"科隆股份","id":"300404","buy":"19-4-24","sell":"19-5-10","time":10,"buyPrice":"9.53","sellPrice":"18.75","increase":"16.8%","reason":"高转送"},
  {"name":"康强电子","id":"002119","buy":"19-5-6","sell":"19-5-30","time":19,"buyPrice":"11.34","sellPrice":"18.75","increase":"25.3%","reason":"芯片概念"}
]
//
//
//
//
//
//
/*
* style:样式1,2,3
*num:数组长度1,2,3
*/

function tableStyle(tableObject) {
  const num = tableObject.arrLen || 0
  const domID = tableObject.domID || 'table'
  const reArr = tableArr.slice(0,num)
  let str = "";
  for(let i of reArr){
    switch (domID){
      case "fuLi":
        str += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.reason}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "recordTable":
        str += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "income":
        str += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "shout":
        str += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buy}</td>
            <td>T+${i.time-1}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "monthlyRecord":
        str += `<tr>
            <td>${i.buy.substr(3,1)}.${i.buy.substr(5,2)}</td>    
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.increase}</td>
            <td>${i.reason}</td>
          </tr>`;
        break;
      case "table1":
        str += `<tr>
            <td>${i.buy.substr(3,1)}月${i.buy.substr(5,2)}日</td>    
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "table2":
        str += `<tr>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td><em>${i.increase}</em></td>
            <td>${i.time}天</td>
          </tr>`;
        break;
      case "table3":
        str += `<tr>
            <td>${i.buy.substr(0,2)}.${i.buy.substr(3,1)}.${i.buy.substr(5,2)}</td>    
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>获利了结</td>
            <td>${i.increase}</td>
            <td>${i.reason}</td>
          </tr>`;
        break;
      case "table4":
        str += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buy.substr(3,1)}月${i.buy.substr(5,2)}日</td>    
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "table5":
        str += `<tr>
            <td>${i.name}</td>
            <td>${i.reason}</td> 
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "table6":
        str += `<tr>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.increase}</td>
            <td>${i.reason}</td> 
          </tr>`;
        break;
      case "blockTab":
        str += `<tr>
            <td>${i.buy.substr(3,1)}月${i.buy.substr(5,2)}日</td>    
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>T+${i.time}日</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "pool":
        str += `<tr>  
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.time}天</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "goodShow":
        str += `<tr>  
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buyPrice}</td>
            <td>${i.sellPrice}</td>
            <td>${i.increase}</td>
          </tr>`;
        break;
      case "good":
        str += `<tr>  
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>${i.buy}</td>
            <td>${i.increase}</td>
            <td>${i.time}天</td>
          </tr>`;
        break;
      default:
        str += `<tr>
            <td>${i.name}</td>
            <td>${i.id}</td>
            <td>${i.reason}</td>
            <td><em>${i.increase}</em></td>
          </tr>`;
        break;
    }
    $("#"+domID).html(str);
  }
}

//动态获取时间
$(()=>{
  const date = new Date();
  date.setTime(date.getTime()+3*24*60*60*1000);
  const month = date.getMonth()+1;
  //本月
  $('.month').text(month);
  // 上个月
  month==1?$('.lastMonth').text('12'):$('.lastMonth').text(month-1)
  //下个月
  $('.nextMonth').text(month+1)
})

// img.src = data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==




