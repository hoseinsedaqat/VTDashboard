// Boom TS Support Images and if Module don't Support type Just bring in to Global for remove Error type and work Fine

declare module "*.jpg" {

    export default "" as string;

}

declare module "*.png" {

    export default "" as string;

}

declare module 'uuid'

declare module 'v-calendar'

declare module 'vue2-google-maps'