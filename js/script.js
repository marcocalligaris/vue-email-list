const app = new Vue({
    el: '#root',
    data: {
        items: 10,
        // address: '',
        addresses: [],
    },

    // created() {
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
    //         this.address = res.data.response;
    //     }),
    // },

    methods: {
        getEmailAddresses() {
            for (let i = 1; i <= items; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const address = res.data.response
                    this.addresses.push(address);
                })
            }
        }
    },
})