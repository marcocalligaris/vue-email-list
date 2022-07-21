const app = new Vue({
    el: '#root',
    data: {
        // address: '',
        addresses: [],
    },

    // created() {
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
    //         this.address = res.data.response;
    //     }),
    // },

    created() {
            for (let i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    const address = res.data.response;
                    this.addresses.push(address);
                })
            }
    },
})