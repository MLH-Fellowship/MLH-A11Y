def topic_unit():
    with open("api/topics/unit1.md") as f:
        data = f.read()
        print(data)
        return data

topic_unit()