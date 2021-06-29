{
	_schema: {
		name:      "Show"
		namespace: "tv.cncf.io"
	}

	#Show: {
		_dataset: {
			plural: "shows"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		title:             string @template("My Show")
		body?:             string
        host_id:           string
	}

}

