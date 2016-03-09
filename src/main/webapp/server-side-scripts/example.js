$undertow
    .onGet("/hello",
        {headers: {"content-type": "text/plain"}},
        [function ($exchange) {
            return "Hello World";
        }]);


$undertow
.onGet("/hello-freemarker",
    {template: 'hello-freemarker.ftl',template_type: 'freemarker', headers: {"content-type": "text/plain"}},
    [function ($exchange) {
        return {message: 'Hello World-Free Marker!'};
    }]);