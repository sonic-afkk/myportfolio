var myEnv = (() => {
    const environment = {
        // create your own api key from: https://web3forms.com/
        // this api key can be public.
        web3FormsApiKey: "65df8834-b54f-4683-b208-9bfb5a1c751f",
    }
    return {
        getVariable: (key) => {
            return environment[key];
        }
    }
})();