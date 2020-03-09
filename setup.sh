
PGPORT=5432
PGHOST="localhost"
PGUSER="postgres"
DEV_PGDB="dev_politico"
TEST_PGDB="test_politico"
Template="template0"
createdb -h $PGHOST -T $Template   -p $PGPORT -U $PGUSER $DEV_PGDB
createdb -h $PGHOST -T $Template   -p $PGPORT -U $PGUSER $TEST_PGDB
touch .env
cat >> .env << EOF
DEV_DATABASE_URL=postgres:postgres@localhost:5432/dev_politico
TEST_DATABASE_URL=postgres:postgres@localhost:5432/test_politico
EOF
yarn install