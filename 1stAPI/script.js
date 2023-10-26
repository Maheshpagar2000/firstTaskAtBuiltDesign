
const GetUrl='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=157686bf0eb14481bae61bf71f06365e';
GetApi =fetch(GetUrl)

GetApi.then(response => response.json())
    .then(data => {
        const tableData = data.articles.map(user =>
                    `<tr>
                        <td>${user.author}</td>
                        <td>${user.content}</td>
                        <td>${user.description}</td>
                        <td>${user.publishedAt}</td>
                        <td>${user.source.name}</td>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                        <td>${user.title}</td>
                        <td><a href="${user.url}">Link</a></td>
                        <td><a href="${user.urlToImage}">Link</a></td>
                    </tr>`
                ).join("");

                document.getElementById('data').innerHTML = tableData;
         })
         
    .catch(error => {console.log(error)});
