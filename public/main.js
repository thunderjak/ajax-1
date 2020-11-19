getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //请求发送成功,状态码200-299
                // 把css内容写入style标签然后插入head
                const style = document.createElement('style')
                // 获取响应内容 request.response
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                // 请求失败
                alert("加载 CSS 失败");
            }
        }

    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 把js内容写入script标签然后插入body
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                // 请求失败
                alert("加载 JS 失败");
            }
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
                // 把响应内容写入div标签然后插入body
            }
        }
    else {
        // 请求失败
        alert("加载 html 失败");
    }
    request.send()
}
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
      if (request.readyState === 4 ) {
        if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML
        const text = dom.getElementsByTagName("warning")[0].textContent
        console.log(text.trim())
        // 清除空格
      }
    }
    else {
        // 请求失败
        alert("加载 xml 失败");
    }
    request.send()
  }
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
      if (request.readyState === 4 ) {
        if (request.status >= 200 && request.status < 300) {
        console.log(typeof request.response)
        console.log(request.response)
        const bool = JSON.parse(request.response)
        console.log(typeof bool)
        console.log(bool)
      }
    }
    }
    request.send()
  }
let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open("GET", `/page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 ) {
        if (request.status >= 200 && request.status < 300) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n+=1
    }
  }
}
  request.send()
}