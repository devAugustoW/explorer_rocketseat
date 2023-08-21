
// Definição da classe Router
export class Router {

    // Objeto para armazenar as rotas e suas páginas correspondentes
    routes = {}
  
    // Método para adicionar uma rota e sua página correspondente ao objeto routes
    add(routeName, page) {
      this.routes[routeName] = page

    }
  
    // Método para tratar a mudança de rota a partir de um evento de clique
    route(event) {
      event = event || window.event
      event.preventDefault()
  
      // Atualiza o histórico do navegador e a URL sem recarregar a página
      window.history.pushState({}, '', event.target.href)
  
      this.handle()

    }
  
    // Método para lidar com a exibição da página correspondente à rota atual
    handle() {
        // Obtém o caminho da URL atual
        const { pathname } = window.location

        // Pega a página correspondente à rota atual (ou a página 404 se não houver correspondência)
        const route = this.routes[pathname] || this.routes[404]
      
        // Faz uma requisição fetch para obter o conteúdo da página
        fetch(route)
            .then(data => data.text())
            .then(html => {
            document.querySelector('#app').innerHTML = html

        })

    }

}

/*
O usuário clica em um dos links na barra de navegação (por exemplo, o link "Sobre").

A função route() é chamada pelo evento de clique no link. Essa função está definida como window.route = () => router.route(), então ela redireciona a chamada para o método route() do objeto router.

O método route() do objeto router é executado. Nesse método:

a. O evento de clique é capturado e o seu comportamento padrão é prevenido através do event.preventDefault(). Isso impede que o navegador siga o link normalmente, o que é importante para a abordagem de SPA.

b. O método pushState() do objeto window.history é chamado para atualizar a URL do navegador para a nova rota sem recarregar a página. Isso mantém a experiência do usuário sem interrupções.

c. O método handle() é chamado. Isso faz com que a página correspondente à nova rota seja carregada.

O método handle() é executado:

a. A propriedade pathname do objeto window.location é usada para obter o caminho da URL atual, por exemplo, "/about".

b. O objeto routes do objeto router é verificado para encontrar a página correspondente à rota atual. Se a rota não estiver definida, a página 404 é usada.

c. Uma requisição fetch é feita para obter o conteúdo da página correspondente à rota. A URL da página é obtida do objeto routes.

d. O conteúdo da página (geralmente HTML) é convertido para texto usando .then(data => data.text()).
*/