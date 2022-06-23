# Pokemon API

## Tech Stack
* Node JS
* Express JS
* Sequelize

## Instalasi
Jalankan perintah berikut untuk melakukan instalasi.
```
npm install
```
Atur variable environtment untuk membuat database dalam environtment development dalam file `.env`.
```bash
PORT=

# Development database
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
```

Untuk mempersiapkan database, dapat menjalankan perintah berikut.
```bash
sequelize db:create # Untuk membuat database
sequelize db:migrate # Untuk melakukan migrasi model
sequelize db:seed:all # Untuk membuat data awal yang telah disiapkan
```

## Penggunaan
Base URL sesuai dengan environment yang telah diatur.

### List data pokemon
*REQUEST*
* Method: GET
* Endpoint: `/pokemon`
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  Berisi jumlah data yang ingin diambil
  ```json
  {
      "limit": number
  }
  ```
  contoh:
  ```json
  {
      "limit": 2
  }
  ```

*CONTOH RESPONSE*
```json
{
  "data": [
    {
      "id": 1,
      "id_category": 1,
      "number": "#001",
      "name": "Bulbasaur",
      "height": 71.12,
      "weight": 15.2,
      "category": {
        "name_category": "Seed"
      },
      "type": [
        {
          "name_type": "Grass"
        },
        {
          "name_type": "Poison"
        }
      ]
    },
    {
      "id": 2,
      "id_category": 1,
      "number": "#002",
      "name": "Ivysaur",
      "height": 99.06,
      "weight": 28.7,
      "category": {
        "name_category": "Seed"
      },
      "type": [
        {
          "name_type": "Grass"
        },
        {
          "name_type": "Poison"
        }
      ]
    }
  ]
}
```

### Menambahkan data pokemon
*REQUEST*
* Method: POST
* Endpoint: `/pokemon`
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  `category` berisi id category dari pokemon

  `type` adalah array yang berisi id type dari pokemon
  ```json
  {
    "number": "string",
    "name": "string",
    "height": number,
    "weight": number,
    "category": number,
    "type": [number, number]
  }
  ```
  contoh:
  ```json
  {
      "number": "#191",
    "name": "Sunkern",
    "height": 30.48,
    "weight": 4.0,
    "category": 1,
    "type": [1]
  }
  ```
*RESPONSE*
```json
{
    "message": "OK
}
```

### Meng-update data pokemon
*REQUEST*
* Method: PUT
* Endpoint: `/pokemon/:id` <br/>
  `id` adalah id dari pokemon yang ingin di-update
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  `category` berisi id category dari pokemon

  `type` adalah array yang berisi id type dari pokemon
  ```json
  {
    "number": "string",
    "name": "string",
    "height": number,
    "weight": number,
    "category": number,
    "type": [number, number]
  }
  ```
  contoh:
  ```json
  {
      "number": "#191",
    "name": "Sunkern",
    "height": 30.48,
    "weight": 4.0,
    "category": 1,
    "type": [1]
  }
  ```
*RESPONSE*
```json
{
    "message": "OK"
}
```

### Menghapus data pokemon
*REQUEST*
* Method: DELETE
* Endpoint: `/pokemon/:id` <br/>
  `id` adalah id dari pokemon yang ingin di-hapus

*RESPONSE*
```json
{
    "message": "OK"
}
```

### List data tipe
*REQUEST*
* Method: GET
* Endpoint: `/category`
* Header:
  * Content-Type: application/json
  * Accept: application/json

*CONTOH RESPONSE*
```json
{
  "data": [
    {
      "id": 1,
      "name_category": "Seed"
    },
    {
      "id": 2,
      "name_category": "Lizard"
    }
  ]
}
```

### Menambahkan data kategori
*REQUEST*
* Method: POST
* Endpoint: `/category`
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  ```json
  {
    "name_category": "string"
  }
  ```

*RESPONSE*
```json
{
    "message": "OK"
}
```

### Meng-update data kategori
*REQUEST*
* Method: POST
* Endpoint: `/category/:id`<br/>
  `id` adalah id dari kategori yang ingin di-update
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  ```json
  {
    "name_category": "string"
  }
  ```

*RESPONSE*
```json
{
    "message": "OK"
}
```

### Menghapus data kategori
*REQUEST*
* Method: POST
* Endpoint: `/category/:id`<br/>
  `id` adalah id dari kategori yang ingin dihapus
* Header:
  * Content-Type: application/json
  * Accept: application/json

*RESPONSE*
```json
{
    "message": "OK"
}
```

### List data tipe
*REQUEST*
* Method: GET
* Endpoint: `/category`
* Header:
  * Content-Type: application/json
  * Accept: application/json

*CONTOH RESPONSE*
```json
{
  "data": [
    {
      "id": 1,
      "name_category": "Seed"
    },
    {
      "id": 2,
      "name_category": "Lizard"
    }
  ]
}
```

### Menambahkan data tipe
*REQUEST*
* Method: POST
* Endpoint: `/type`
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  ```json
  {
    "name_type": "string"
  }
  ```

*RESPONSE*
```json
{
    "message": "OK"
}
```

### Meng-update data tipe
*REQUEST*
* Method: POST
* Endpoint: `/type/:id`<br/>
  `id` adalah id dari tipe yang ingin di-update
* Header:
  * Content-Type: application/json
  * Accept: application/json
* Body: <br/>
  ```json
  {
    "name_type": "string"
  }
  ```

*RESPONSE*
```json
{
    "message": "OK"
}
```

### Menghapus data tipe
*REQUEST*
* Method: POST
* Endpoint: `/type/:id`<br/>
  `id` adalah id dari tipe yang ingin dihapus
* Header:
  * Content-Type: application/json
  * Accept: application/json

*RESPONSE*
```json
{
    "message": "OK"
}
```
