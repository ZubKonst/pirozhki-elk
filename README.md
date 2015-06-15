Pirozhki-docker
========
[Pirozhki](https://github.com/ZubKonst/pirozhki) is a [sidekiq](http://sidekiq.org)-based utility for collecting data from social networks.

##Requirements
- Docker-compose v1.1.0 or greater.

##Usage:

### Setup project
- Copy all files from `variables/sample/` to `variables/` and fill with your data.

### Build volume images (for redis, postgres and elasticsearch)
```
docker-compose up -d datacontainer
```

### Warm up database containers
```
docker-compose up -d redis postgres
```

### Setup pirozhki database
```
docker-compose run --rm worker rake db:setup
```

### Run pirozhki tests
```
docker-compose run -e APP_ENV=test --rm worker rake db:setup
docker-compose run -e APP_ENV=test -e COVERAGE=true --rm worker rspec
```

### Run pirozhki (web + worker)
```
docker-compose up -d 
```

### Scale pirozhki workers
```
docker-compose scale worker=2
```

### Run pirozhki console (irb)
```
docker-compose run --rm worker irb -r ./app.rb
```

### Start pirozhki web only
```
docker-compose up nginx
```

### Stop pirozhki worker
```
docker-compose stop worker
```


##License:
Pirozhki is a utility for collecting data from social networks.
Copyright (C) 2014  Konstantin Zub (hello at zubkonst.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
