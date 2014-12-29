Pirozhki-docker
========
[Pirozhki](https://github.com/ZubKonst/pirozhki) is a [sidekiq](http://sidekiq.org)-based utility for collecting data from social networks.

##Usage:

### Setup project
- Copy all files from `variables/sample/` to `variables/` and fill with your data.

### Build volume images (for redis, postgres and elasticsearch)
```
docker create \
  --name pirozhki_db_volume \
  --volume /var/lib/postgresql/data \
  --volume /elasticsearch/data  \
  --volume /data  \
  ubuntu:14.04 true
```

### Setup pirozhki database
```
fig run --rm worker rake db:setup
fig run -e APP_ENV=development --rm worker rake db:setup
```

### Run pirozhki tests
```
fig run -e APP_ENV=test -e COVERAGE=true --rm worker rspec
```

### Run pirozhki (web + worker)
```
fig up -d
```

### Scale pirozhki workers
```
fig scale worker=2
```

### Run pirozhki console (irb)
```
fig run --rm worker irb -r ./app.rb
```

### Start pirozhki web only
```
fig start redis web
```

### Stop pirozhki (web + worker)
```
fig stop web worker
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
