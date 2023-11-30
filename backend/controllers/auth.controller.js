const express = require("express");
const bcryt = require("bcrypt");
const monsterModel = require("../models/monster.model");
const jwt = require("jsonwebtoken");


exports.Register = async (req, res) => {
        const passwordHash = await bcryt.hash(req.body.password, 10);
        const Monster = new monsterModel({
            name: req.body.name,
            password: passwordHash,
            role: req.body.role

        });
        await Monster.save();

        res.status(201).json({ message: 'monstre cree avec succes' });
    };

exports.Login = async (req, res) => {
        const monster = await monsterModel.findOne ({name: req.body.name});
        if (!monster || !await bcryt.compare(req.body.password, monster.pasword)) {
            res.status(401).json({message:'nom ou mot de passe invalide'});
        }
        const token = jwt.sign({monsterId: monster._id}, process.env.SECRET_JWT);
        res.json({token});
    }
