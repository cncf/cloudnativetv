{
	_schema: {
		name:      "Host"
		namespace: "tv.cncf.io"
	}

	#Host: {
		_dataset: {
			plural: "hosts"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		name:             string @template("Your Name")
		body?:            string
        github:           string
        twitter:          string
	}
}
