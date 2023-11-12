#!/bin/sh
FILENAME=netije-$(date +%-Y%-m%-d)-$(date +%-T).tgz
DESTDIR="/netije/backup"
TEMPDIR="/netije/tmp"
rm -rf $TEMPDIR

# Stopping containers
docker stop postgresdb 
docker stop mongodb 
docker stop rabbitmq 
docker stop minio 
docker stop pgAdmin
docker stop netije
docker stop seq 

# Backup volumes
docker run --rm --volumes-from postgresdb -v $TEMPDIR:/backup ubuntu bash -c "cd /var/lib/postgresql/data && tar cvf /backup/postgres.tar ."
docker run --rm --volumes-from mongodb -v $TEMPDIR:/backup ubuntu bash -c "cd /data/db && tar cvf /backup/mongodb.tar ."
docker run --rm --volumes-from rabbitmq -v $TEMPDIR:/backup ubuntu bash -c "cd /var/lib/rabbitmq && tar cvf /backup/rabbitmq.tar ."
docker run --rm --volumes-from minio -v $TEMPDIR:/backup ubuntu bash -c "cd /data && tar cvf /backup/minio.tar ."
docker run --rm --volumes-from pgAdmin -v $TEMPDIR:/backup ubuntu bash -c "cd /var/lib/pgadmin && tar cvf /backup/pgAdmin.tar ."
docker run --rm --volumes-from netije-api-data -v $TEMPDIR:/backup ubuntu bash -c "cd /app/PrivateStaticFiles && tar cvf /backup/netije.tar ."
docker run --rm --volumes-from seq -v $TEMPDIR:/backup ubuntu bash -c "cd /data && tar cvf /backup/seq.tar ."

mkdir $DESTDIR
tar --create --gzip --file=$DESTDIR/$FILENAME $TEMPDIR
rm -rf $TEMPDIR

cd $DESTDIR
rm -f $(ls -1t $DESTDIR | tail -n +7)

# Starting containers
docker start rabbitmq
docker start postgresdb 
docker start mongodb 
docker start minio 
docker start pgAdmin 
docker start netije
docker start seq
