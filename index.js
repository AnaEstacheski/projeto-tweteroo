import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const user = [
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
]

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    const newUser = {
        username,
        avatar,
    };
    user.push(newUser);
    res.status(201).send("OK");
})

app.get("/sign-up", (req, res) => {
    res.send(user);
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body
    const newTweet = {
        username,
        tweet
    }
    tweets.push(newTweet)
    res.status(201).send("Ok");
})

app.get("/tweets", (req, res) => {
    let avatar
    const postedTweets = tweets
        .slice(0)
        .reverse()
        .map((obj) => {
            user.forEach((a) => {
                if (a.username === obj.username) {
                    avatar = a.avatar
                }
            })
            return {
                username: obj.username,
                avatar,
                tweet: obj.tweet
            }
        })
    const listOfTweets = postedTweets.slice(0, 10);
    res.send(listOfTweets);
})

app.get("/tweets/:username", (req, res) => {
    const { username } = req.params;
    const userTweets = tweets.filter((obj) => {
        return obj.username === username;
    });
    const userPostedTweets = userTweets.slice(0).reverse();
    res.send(userPostedTweets);
})

app.listen(5000, () => console.log("App running in port: 5000"))