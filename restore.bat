DESTDIR="/netije/restore/netije/tmp"
cd /netije/restore
tar zxvf *.tgz --force-local

# Creating volumes
docker volume create netije_minio-data
docker volume create netije_mongo-db-data
docker volume create netije_pgAdmin-data
docker volume create netije_postgres-db-data
docker volume create netije_rabbitmq-data
docker volume create netije_seq-data
docker volume create netije_netije-api-data

# Restoring
docker run --rm -v netije_minio-data:/recover -v $DESTDIR/minio.tar:/backup/minio.tar ubuntu bash -c "cd /recover && tar xvf /backup/minio.tar"
docker run --rm -v netije_mongo-db-data:/recover -v $DESTDIR/mongodb.tar:/backup/mongodb.tar ubuntu bash -c "cd /recover && tar xvf /backup/mongodb.tar"
docker run --rm -v netije_pgAdmin-data:/recover -v $DESTDIR/pgAdmin.tar:/backup/pgAdmin.tar ubuntu bash -c "cd /recover && tar xvf /backup/pgAdmin.tar"
docker run --rm -v netije_postgres-db-data:/recover -v $DESTDIR/postgres.tar:/backup/postgres.tar ubuntu bash -c "cd /recover && tar xvf /backup/postgres.tar"
docker run --rm -v netije_rabbitmq-data:/recover -v $DESTDIR/rabbitmq.tar:/backup/rabbitmq.tar ubuntu bash -c "cd /recover && tar xvf /backup/rabbitmq.tar"
docker run --rm -v netije_seq-data:/recover -v $DESTDIR/seq.tar:/backup/seq.tar ubuntu bash -c "cd /recover && tar xvf /backup/seq.tar"
docker run --rm -v netije_netije-api-data:/recover -v $DESTDIR/netije.tar:/backup/netije.tar ubuntu bash -c "cd /recover && tar xvf /backup/netije.tar"