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

There are two files which needs to be configurated: [`links.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/links.json) and [`meta.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/meta.json). These files are in the config folder.

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
    "language": "english",
    "name": "Your name",
    "picture": "https://url/to/picture",
    "title": "An awesome website title!"
}
```

All available languages can be found in [`this file`](https://github.com/nandolawson/LinkLoom/blob/main/scripts/meta.js).

## Theme configuration

There are two files again, [`theme.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/theme.json), which is located in the config folder, and [`particledrift.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/wallpaper/particledrift.json), which is located in a subfolder of the config folder called wallpaper.
[`theme.json`](https://github.com/nandolawson/LinkLoom/blob/main/config/theme.json)

### theme.json

This file looks like this:

```json
{
    "accent": "#ffffff",
    "background": "#000000",
    "button": "#333333",
    "wallpaper": "particledrift"
}
```

All values (except for wallpaper) should be color codes as hexadecimal values. Here is a explanation for every of them:

- _`accent`_ is for the color of the text and for highlighted buttons
- _`background`_ is the color of the background
- _`button`_ is the color of the buttons
- _`wallpaper`_ enables the animated wallpaper if set to _particledrift_

### particledrift.json

This config looks similiar to the one above:

```json
{
    "particle1": "#181818",
    "particle2": "#3c3c3c",
    "particle3": "#606060"
}
```

All the values are hexadecimal color codes. They are there to determine the colors of the particles.

## License

This project is licensed under the GPL v3. You can read the license [here](https://github.com/nandolawson/LinkLoom/blob/master/LICENSE)

## Contribution

Anyone who wants to contribute is more than welcome to do so. Please feel free to create a pull request here on GitHub. If you decide to fork this project, please make sure to adhere to the license. Your involvement and feedback are highly appreciated!
