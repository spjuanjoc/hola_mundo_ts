class Logger {

    log(message:string):void{
        console.log(message);
    }
}
function x():void{};
const logger = new Logger();
logger.log("Hello world");
