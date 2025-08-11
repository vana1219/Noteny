import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv"
dotenv.config();

//Create a ratelimiter that allows 10 request per seconds
const ratelimit= new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "10 s"),
});

export default ratelimit;

