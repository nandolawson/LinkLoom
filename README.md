# LinkLoom

This is a small Linktree clone which can be easily hosted via GitHub Pages or other ways. You can see a demo [here](https://nandolawson.github.io/LinkLoom).

## Usage examples

### GitHub Pages

In this example, GitHub Pages is used because it is very simple to use and free.

The repository must be forked and LinkLoom configured. How to configure can be found in the section below. Then GitHub Pages must be activated and pointed to the master branch.

### Docker

Since Docker is perfect for self-hosted services, there is an image on [Docker Hub](https://hub.docker.com/r/nandolawson/linkloom) and [GitHub Container Repository](https://github.com/nandolawson/linkloom/pkgs/container/linkloom). It is based on the Caddy image and can be used in the same way as any Docker image. A simple test would be to start the image using:

```sh
docker run -d -p 5500:80 nandolawson/linkloom:latest
```

For further configuration options and information on how to use Docker, there is a wealth of information on the Internet. All files belonging to this project are located in /srv.

## Configuration

There are three files which needs to be configurated: [`links.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/links.json), [`meta.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/meta.json) and [`theme.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/theme.json). These files are in the config folder.

### links.json

Put some URLs and the corresponding information in this format:

```json
[
    {
        "url": "https://example.com/1",
        "text": "Example 1",
        "icon": "Any icon from Font Awesome"
    },
    {
        "url": "https://example.com/2",
        "text": "Example 2",
        "icon": "Any icon from Font Awesome"
    }
]
```

### meta.json

Pretty easy:

```json
{
    "favicon": "https://url/to/favicon",
    "name": "Your name",
    "picture": "https://url/to/picture",
    "title": "An awesome website title!"
}
```

### theme.json

This file looks like this:

```json
{
    "accent": "#ffffff",
    "background": "#000000",
    "button": "#333333",
    "particles": true,
    "particle1": "#181818",
    "particle2": "#3c3c3c",
    "particle3": "#606060"
}
```

All values (except for particles) should be color codes as hexadecimal values. Here is a explanation for every of them:

- _`accent`_ is for the color of the text and for highlighted buttons
- _`background`_ is the color of the background
- _`button`_ is the color of the buttons
- _`particles`_ enables / disables the animated background. Set it to true or false.
- _`particle1`_, _`particle2`_, & _`particle3`_ is for the color of the particles in the background

## License

This project is licensed under the GPL v3. You can read the license [here](https://github.com/nandolawson/LinkLoom/blob/master/LICENSE)

## Contribution

Anyone who wants to contribute is more than welcome to do so. Please feel free to create a pull request here on GitHub. If you decide to fork this project, please make sure to adhere to the license. Your involvement and feedback are highly appreciated!
