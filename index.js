var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vuejs!',
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.message = 'I have changed the data!';