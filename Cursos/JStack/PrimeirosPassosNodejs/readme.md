<h1>Node.js</h1>  

<p>Plataforma/runtime que permite rodar JavaScript no servidor, Ryan Dhal lançou o node.js em 2009<p>
                                                 
### V8

+ Interpretador de código JavaScript
+ Lançado em 2008
                                             
 ### Call Stack

+ Pilha de processamento do nosso codigo
+ Todas as funçoes executadas dentro do codigo vão para dentro da call stack

### Single Thread

+ Apenas uma Call Stack
+ Executa apenas um código por vez
+ Node é no-blocking I/O (Input e Output de dados de forma não bloqueante)
+ Executa código assíncrono
+ O Node só tem uma call stack, ele é de fato no-blocking I/O e de fato ele consegue executar masi de uma coisa ao mesmo tempo, ele consegue fazer isso poruqe pode debaixo dos "panos" ele tem uma biblioteca escrita em C chamada libuv, ela implementa duas funcionalidade que permitem rodar o código são chamadas de Thread Pool e Event Loop

## API(Application Programming Interface)

+ Permite que a gente conecte varias aplicações de diversos tipos em uma mesma fonte de dados

### HTTP(Hypertext Transfer Protocol)
				  		 
+ Troca de mensagens entre duas pontas (Request e Response)
					
### Request HTTP
					
+ URL/endpoint 
	+ Indentificação De Recursos
		 + HTTPS://MYWEBSITE.COM/PRODUCTS?page=3orderBy=name
			    

+ Query Params
	+ Parâmetros na URL
		+ https://mywebsite.com/products?PAGE=3ORDERBY=NAME
			   
+ Método
	+ Principais métodos:
	   	+ GET: Consulta de Dados
	   	+ POST: criação de registros
	   	+ PUT: Alteração de registro
	   	+ DELETE: Deleção de Registros
+ Headers
	+ Informações adicionais entre cliente se servidor
	+ Existem Headers pré definidos porém também podemos criar headers customizados
		+ Nome e valor separados por dois pontos (:)
			Content-Type: application/json
		+ Case insensitive:
			content-type: application/json
			autorization: bearer usertoken
		+ Custom Headers(Sempre começam com X)
			X-Org-ID: 1123
			
+ Body	
	+ Corpo da Mensagem
	+ Apenas requisições do tipo POST e PUT
		* JSON (javaScript Object Notation)


### Response
					     
+ Headers
+ Content Type
+ Status Code
	+ Categorizados pelo primeiro dígito:
		+ De 100-199: Respostas de informação
		+ De 200-299: Respostas de sucesso
		+ De 300-399: Redirecionamento
		+ De 400-499: Erros do cliente
		+ De 500-599: Erros do servidor
	
+ Body

### Rest(Representation State Tranfer)	

+ Padrão para construção de APIs;
+ Usa protocolo HTTP
+ Retorna uma representação do estado	
+ Nome dos recursos sempre no plural

													

