## shortql

> A simple, modular GraphQL cache supporting multi-platform for Javascript.
> Flexible configuration control for querying data and also support open or close debug log.

The old version is named graphql-sync-multi-platform


### Install

> npm install shortql --save

### Quickstart

## axios

    import * as QL from 'shortql/graphql_cache.core';
    import axios from 'axios';
    const graphqlEndpoint = 'http://xxx/graphql';

    //request axios
    QL.init(graphqlEndpoint,axios));

## Taro

     import * as QL from 'shortql/graphql_cache.core';
     import Taro, { Component } from '@tarojs/taro';
     const graphqlEndpoint = 'http://xxx/graphql';

     QL.init(graphqlEndpoint, Taro.request);

## flyio

    import * as QL from 'shortql/graphql_cache.core';
    import Fly from 'flyio';
    const graphqlEndpoint = 'http://xxx';

     function flyReqest(options){
      const url ='/graphql';
      return Fly.request(url,options.data,options);
    }

    //request flyio
    QL.init(graphqlEndpoint,flyReqest));

## open debug log

**open**

    QL.init(graphqlEndpoint, request, {enable_log : true});

**close**

default close console.log

    QL.init(graphqlEndpoint, request);
    QL.init(graphqlEndpoint, request, {enable_log : false});

### Usage

**` QL.find_one(collection,condition,fields,option) `**

**` QL.find_many(collection,condition,fields,option) `**

#### skip cache and get new fetch data

    setting option: {force : true}

    eg:

    QL.find_one('order', {id: "xxx"}, ['id'], {force: true});

**` QL.insert(collection,condition,fields) `**

**` QL.update(collection,condition,fields) `**

**` QL.remove(collection,condition) `**

    eg:

    import * as QL from "shortql/graphql_cache.core";

    QL.find_many(collection,condition,fields).then(res => {
        return res;
    });

    // return result with 'ok' when insert or update success
    QL.update(collection,condition,fields).then(res => {
        if(res.result === 'ok'){
            return res;
        }
    });

    QL.remove(collection,condition).then(res => {
        if(res === 'ok'){
            // others operation
        }
    });
