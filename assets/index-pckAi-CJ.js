var ca=e=> {
    throw TypeError(e)
}

;
var Xo=(e, t, n)=>t.has(e)||ca("Cannot " +n);
var T=(e, t, n)=>(Xo(e, t, "read from private field"), n?n.call(e):t.get(e)),
oe=(e, t, n)=>t.has(e)?ca("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e, n),
Z=(e, t, n, r)=>(Xo(e, t, "write to private field"), r?r.call(e, n):t.set(e, n), n),
be=(e, t, n)=>(Xo(e, t, "access private method"), n);

var Ks=(e, t, n, r)=>({
    set _(s) {
        Z(e, t, s, n)
    }

    , get _() {
        return T(e, t, r)
    }
});

(function() {
        const t=document.createElement("link").relList; if(t&&t.supports&&t.supports("modulepreload"))return; for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s); new MutationObserver(s=> {
                for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK" &&i.rel==="modulepreload" &&r(i)

            }).observe(document, {
            childList: !0, subtree: !0

        }); function n(s) {
        const o= {}

        ; return s.integrity&&(o.integrity=s.integrity), s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy), s.crossOrigin==="use-credentials" ?o.credentials="include":s.crossOrigin==="anonymous" ?o.credentials="omit":o.credentials="same-origin", o
    }

    function r(s) {
        if(s.ep)return; s.ep= !0; const o=n(s); fetch(s.href, o)
    }
})();

/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function wl(e) {
    const t=Object.create(null);
    for(const n of e.split(","))t[n]=1;
    return n=>n in t
}

const ke= {}

,
Or=[],
ln=()=> {}

,
bh=()=> !1,
Ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),
El=e=>e.startsWith ("onUpdate:"),
Ge=Object.assign,
Sl=(e, t)=> {
    const n=e.indexOf(t);
    n>-1&&e.splice(n, 1)
}

,
_h=Object.prototype.hasOwnProperty,
Te=(e, t)=>_h.call(e, t),
se=Array.isArray,
Ar=e=>Ro(e)==="[object Map]",
Ou=e=>Ro(e)==="[object Set]",
ie=e=>typeof e=="function",
Ve=e=>typeof e=="string",
Kn=e=>typeof e=="symbol",
De=e=>e !==null&&typeof e=="object",
Au=e=>(De(e)||ie(e))&&ie(e.then)&&ie(e.catch),
Ru=Object.prototype.toString,
Ro=e=>Ru.call(e),
vh=e=>Ro(e).slice(8, -1),
Iu=e=>Ro(e)==="[object Object]",
xl=e=>Ve(e)&&e !=="NaN" &&e[0] !=="-" &&""+parseInt(e, 10)===e,
hs=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
Io=e=> {
    const t=Object.create(null);
    return n=>t[n]||(t[n]=e(n))
}

,
yh=/-(\w)/g,
jt=Io(e=>e.replace(yh, (t, n)=>n?n.toUpperCase():"")),
wh=/\B([A-Z])/g,
wr=Io(e=>e.replace(wh, "-$1").toLowerCase()),
ko=Io(e=>e.charAt(0).toUpperCase()+e.slice(1)),
ei=Io(e=>e?`on$ {
        ko(e)
    }

    `:""),
zn=(e, t)=> !Object.is(e, t),
oo=(e, ...t)=> {
    for(let n=0; n<e.length; n++)e[n](...t)
}

,
ku=(e, t, n, r= !1)=> {
    Object.defineProperty(e, t, {
        configurable: !0, enumerable: !1, writable:r, value:n
    })
}

,
Si=e=> {
    const t=parseFloat(e);
    return isNaN(t)?e: t
}

,
Eh=e=> {
    const t=Ve(e)?Number(e): NaN;
    return isNaN(t)?e: t
}

;
let ua;

const Mu=()=>ua||(ua=typeof globalThis<"u" ?globalThis:typeof self<"u" ?self:typeof window<"u" ?window:typeof global<"u" ?global: {});

function Kr(e) {
    if(se(e)) {
        const t= {}

        ;

        for(let n=0; n<e.length; n++) {
            const r=e[n],
            s=Ve(r)?Lh(r): Kr(r);
            if(s)for(const o in s)t[o]=s[o]
        }

        return t
    }

    else if(Ve(e)||De(e))return e
}

const Sh=/;

(? ![^(]*\))/g, xh=/:([^]+)/, Ch=/\/\*[^]*?\*\//g; function Lh(e) {
        const t= {}

        ; return e.replace(Ch, "").split(Sh).forEach(n=> {
                if(n) {
                    const r=n.split(xh); r.length>1&&(t[r[0].trim()]=r[1].trim())
                }
            }), t
    }

    function sn(e) {
        let t=""; if(Ve(e))t=e; else if(se(e))for(let n=0; n<e.length; n++) {
            const r=sn(e[n]); r&&(t+=r+" ")
        }

        else if(De(e))for(const n in e)e[n]&&(t+=n+" "); return t.trim()
    }

    const Th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Oh=wl(Th); function Pu(e) {
        return ! !e||e===""
    }

    const Nu=e=> ! !(e&&e.__v_isRef=== !0), F=e=>Ve(e)?e:e==null?"":se(e)||De(e)&&(e.toString===Ru|| !ie(e.toString))?Nu(e)?F(e.value):JSON.stringify(e, Fu, 2):String(e), Fu=(e, t)=>Nu(t)?Fu(e, t.value):Ar(t)? {
        [`Map($ {
                t.size

            })`]:[...t.entries()].reduce((n, [r, s], o)=>(n[ti(r, o)+" =>"]=s, n), {})
}

:Ou(t)? {
    [`Set($ {
            t.size
        })`]:[...t.values()].map(n=>ti(n))
}

:Kn(t)?ti(t):De(t)&& !se(t)&& !Iu(t)?String(t):t, ti=(e, t="")=> {
    var n; return Kn(e)?`Symbol($ {
            (n=e.description) !=null?n:t
        })`:e
}

;

/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bt; class Du {
    constructor(t= !1) {
        this.detached=t, this._active= !0, this.effects=[], this.cleanups=[], this._isPaused= !1, this.parent=bt, !t&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)
    }

    get active() {
        return this._active
    }

    pause() {
        if(this._active) {
            this._isPaused= !0; let t, n; if(this.scopes)for(t=0, n=this.scopes.length; t<n; t++)this.scopes[t].pause(); for(t=0, n=this.effects.length; t<n; t++)this.effects[t].pause()
        }
    }

    resume() {
        if(this._active&&this._isPaused) {
            this._isPaused= !1; let t, n; if(this.scopes)for(t=0, n=this.scopes.length; t<n; t++)this.scopes[t].resume(); for(t=0, n=this.effects.length; t<n; t++)this.effects[t].resume()
        }
    }

    run(t) {
        if(this._active) {
            const n=bt; try {
                return bt=this, t()
            }

            finally {
                bt=n
            }
        }
    }

    on() {
        bt=this
    }

    off() {
        bt=this.parent
    }

    stop(t) {
        if(this._active) {
            let n, r; for(n=0, r=this.effects.length; n<r; n++)this.effects[n].stop(); for(n=0, r=this.cleanups.length; n<r; n++)this.cleanups[n](); if(this.scopes)for(n=0, r=this.scopes.length; n<r; n++)this.scopes[n].stop( !0); if( !this.detached&&this.parent&& !t) {
                const s=this.parent.scopes.pop(); s&&s !==this&&(this.parent.scopes[this.index]=s, s.index=this.index)
            }

            this.parent=void 0, this._active= !1
        }
    }
}

function Ah(e) {
    return new Du(e)
}

function $u() {
    return bt
}

function ju(e, t= !1) {
    bt&&bt.cleanups.push(e)
}

let Ne; const ni=new WeakSet; class Hu {
    constructor(t) {
        this.fn=t, this.deps=void 0, this.depsTail=void 0, this.flags=5, this.next=void 0, this.cleanup=void 0, this.scheduler=void 0, bt&&bt.active&&bt.effects.push(this)
    }

    pause() {
        this.flags|=64
    }

    resume() {
        this.flags&64&&(this.flags&=-65, ni.has(this)&&(ni.delete(this), this.trigger()))
    }

    notify() {
        this.flags&2&& !(this.flags&32)||this.flags&8||Bu(this)
    }

    run() {
        if( !(this.flags&1))return this.fn(); this.flags|=2, da(this), Vu(this); const t=Ne, n=Vt; Ne=this, Vt= !0; try {
            return this.fn()
        }

        finally {
            zu(this), Ne=t, Vt=n, this.flags&=-3
        }
    }

    stop() {
        if(this.flags&1) {
            for(let t=this.deps; t; t=t.nextDep)Tl(t); this.deps=this.depsTail=void 0, da(this), this.onStop&&this.onStop(), this.flags&=-2
        }
    }

    trigger() {
        this.flags&64?ni.add(this):this.scheduler?this.scheduler():this.runIfDirty()
    }

    runIfDirty() {
        xi(this)&&this.run()
    }

    get dirty() {
        return xi(this)
    }
}

let Uu=0, ps, ms; function Bu(e, t= !1) {
    if(e.flags|=8, t) {
        e.next=ms, ms=e; return
    }

    e.next=ps, ps=e
}

function Cl() {
    Uu++
}

function Ll() {
    if(--Uu>0)return; if(ms) {
        let t=ms; for(ms=void 0; t; ) {
            const n=t.next; t.next=void 0, t.flags&=-9, t=n
        }
    }

    let e; for(; ps; ) {
        let t=ps; for(ps=void 0; t; ) {
            const n=t.next; if(t.next=void 0, t.flags&=-9, t.flags&1)try {
                t.trigger()
            }

            catch(r) {
                e||(e=r)
            }

            t=n
        }
    }

    if(e)throw e
}

function Vu(e) {
    for(let t=e.deps; t; t=t.nextDep)t.version=-1, t.prevActiveLink=t.dep.activeLink, t.dep.activeLink=t
}

function zu(e) {
    let t, n=e.depsTail, r=n; for(; r; ) {
        const s=r.prevDep; r.version===-1?(r===n&&(n=s), Tl(r), Rh(r)):t=r, r.dep.activeLink=r.prevActiveLink, r.prevActiveLink=void 0, r=s
    }

    e.deps=t, e.depsTail=n
}

function xi(e) {
    for(let t=e.deps; t; t=t.nextDep)if(t.dep.version !==t.version||t.dep.computed&&(Wu(t.dep.computed)||t.dep.version !==t.version))return !0; return ! !e._dirty
}

function Wu(e) {
    if(e.flags&4&& !(e.flags&16)||(e.flags&=-17, e.globalVersion===ws))return; e.globalVersion=ws; const t=e.dep; if(e.flags|=2, t.version>0&& !e.isSSR&&e.deps&& !xi(e)) {
        e.flags&=-3; return
    }

    const n=Ne, r=Vt; Ne=e, Vt= !0; try {
        Vu(e); const s=e.fn(e._value); (t.version===0||zn(s, e._value))&&(e._value=s, t.version++)
    }

    catch(s) {
        throw t.version++, s
    }

    finally {
        Ne=n, Vt=r, zu(e), e.flags&=-3
    }
}

function Tl(e, t= !1) {
    const {
        dep:n, prevSub:r, nextSub:s
    }

    =e; if(r&&(r.nextSub=s, e.prevSub=void 0), s&&(s.prevSub=r, e.nextSub=void 0), n.subs===e&&(n.subs=r), !n.subs&&n.computed) {
        n.computed.flags&=-5; for(let o=n.computed.deps; o; o=o.nextDep)Tl(o, !0)
    }

    !t&& !--n.sc&&n.map&&n.map.delete(n.key)
}

function Rh(e) {
    const {
        prevDep:t, nextDep:n
    }

    =e; t&&(t.nextDep=n, e.prevDep=void 0), n&&(n.prevDep=t, e.nextDep=void 0)
}

let Vt= !0; const Gu=[]; function qn() {
    Gu.push(Vt), Vt= !1
}

function Qn() {
    const e=Gu.pop(); Vt=e===void 0? !0:e
}

function da(e) {
    const {
        cleanup:t
    }

    =e; if(e.cleanup=void 0, t) {
        const n=Ne; Ne=void 0; try {
            t()
        }

        finally {
            Ne=n
        }
    }
}

let ws=0; class Ih {
    constructor(t, n) {
        this.sub=t, this.dep=n, this.version=n.version, this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0
    }
}

class Ol {
    constructor(t) {
        this.computed=t, this.version=0, this.activeLink=void 0, this.subs=void 0, this.map=void 0, this.key=void 0, this.sc=0
    }

    track(t) {
        if( !Ne|| !Vt||Ne===this.computed)return; let n=this.activeLink; if(n===void 0||n.sub !==Ne)n=this.activeLink=new Ih(Ne, this), Ne.deps?(n.prevDep=Ne.depsTail, Ne.depsTail.nextDep=n, Ne.depsTail=n):Ne.deps=Ne.depsTail=n, Ku(n); else if(n.version===-1&&(n.version=this.version, n.nextDep)) {
            const r=n.nextDep; r.prevDep=n.prevDep, n.prevDep&&(n.prevDep.nextDep=r), n.prevDep=Ne.depsTail, n.nextDep=void 0, Ne.depsTail.nextDep=n, Ne.depsTail=n, Ne.deps===n&&(Ne.deps=r)
        }

        return n
    }

    trigger(t) {
        this.version++, ws++, this.notify(t)
    }

    notify(t) {
        Cl(); try {
            for(let n=this.subs; n; n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()
        }

        finally {
            Ll()
        }
    }
}

function Ku(e) {
    if(e.dep.sc++, e.sub.flags&4) {
        const t=e.dep.computed; if(t&& !e.dep.subs) {
            t.flags|=20; for(let r=t.deps; r; r=r.nextDep)Ku(r)
        }

        const n=e.dep.subs; n !==e&&(e.prevSub=n, n&&(n.nextSub=e)), e.dep.subs=e
    }
}

const mo=new WeakMap, pr=Symbol(""), Ci=Symbol(""), Es=Symbol(""); function ut(e, t, n) {
    if(Vt&&Ne) {
        let r=mo.get(e); r||mo.set(e, r=new Map); let s=r.get(n); s||(r.set(n, s=new Ol), s.map=r, s.key=n), s.track()
    }
}

function vn(e, t, n, r, s, o) {
    const i=mo.get(e); if( !i) {
        ws++; return
    }

    const l=a=> {
        a&&a.trigger()
    }

    ; if(Cl(), t==="clear")i.forEach(l); else {
        const a=se(e), u=a&&xl(n); if(a&&n==="length") {
            const d=Number(r); i.forEach((f, h)=> {
                    (h==="length" ||h===Es|| !Kn(h)&&h>=d)&&l(f)
                })
        }

        else switch(n !==void 0&&l(i.get(n)), u&&l(i.get(Es)), t) {
            case"add":a?u&&l(i.get("length")):(l(i.get(pr)), Ar(e)&&l(i.get(Ci))); break; case"delete":a||(l(i.get(pr)), Ar(e)&&l(i.get(Ci))); break; case"set":Ar(e)&&l(i.get(pr)); break
        }
    }

    Ll()
}

function kh(e, t) {
    const n=mo.get(e); return n&&n.get(t)
}

function Er(e) {
    const t=Ee(e); return t===e?t:(ut(t, "iterate", Es), Dt(e)?t:t.map(at))
}

function Mo(e) {
    return ut(e=Ee(e), "iterate", Es), e
}

const Mh= {
    __proto__:null, [Symbol.iterator]() {
        return ri(this, Symbol.iterator, at)
    }

    , concat(...e) {
        return Er(this).concat(...e.map(t=>se(t)?Er(t):t))
    }

    , entries() {
        return ri(this, "entries", e=>(e[1]=at(e[1]), e))
    }

    , every(e, t) {
        return cn(this, "every", e, t, void 0, arguments)
    }

    , filter(e, t) {
        return cn(this, "filter", e, t, n=>n.map(at), arguments)
    }

    , find(e, t) {
        return cn(this, "find", e, t, at, arguments)
    }

    , findIndex(e, t) {
        return cn(this, "findIndex", e, t, void 0, arguments)
    }

    , findLast(e, t) {
        return cn(this, "findLast", e, t, at, arguments)
    }

    , findLastIndex(e, t) {
        return cn(this, "findLastIndex", e, t, void 0, arguments)
    }

    , forEach(e, t) {
        return cn(this, "forEach", e, t, void 0, arguments)
    }

    , includes(...e) {
        return si(this, "includes", e)
    }

    , indexOf(...e) {
        return si(this, "indexOf", e)
    }

    , join(e) {
        return Er(this).join(e)
    }

    , lastIndexOf(...e) {
        return si(this, "lastIndexOf", e)
    }

    , map(e, t) {
        return cn(this, "map", e, t, void 0, arguments)
    }

    , pop() {
        return os(this, "pop")
    }

    , push(...e) {
        return os(this, "push", e)
    }

    , reduce(e, ...t) {
        return fa(this, "reduce", e, t)
    }

    , reduceRight(e, ...t) {
        return fa(this, "reduceRight", e, t)
    }

    , shift() {
        return os(this, "shift")
    }

    , some(e, t) {
        return cn(this, "some", e, t, void 0, arguments)
    }

    , splice(...e) {
        return os(this, "splice", e)
    }

    , toReversed() {
        return Er(this).toReversed()
    }

    , toSorted(e) {
        return Er(this).toSorted(e)
    }

    , toSpliced(...e) {
        return Er(this).toSpliced(...e)
    }

    , unshift(...e) {
        return os(this, "unshift", e)
    }

    , values() {
        return ri(this, "values", at)
    }
}

; function ri(e, t, n) {
    const r=Mo(e), s=r[t](); return r !==e&& !Dt(e)&&(s._next=s.next, s.next=()=> {
            const o=s._next(); return o.value&&(o.value=n(o.value)), o
        }), s
}

const Ph=Array.prototype; function cn(e, t, n, r, s, o) {
    const i=Mo(e), l=i !==e&& !Dt(e), a=i[t]; if(a !==Ph[t]) {
        const f=a.apply(e, o); return l?at(f):f
    }

    let u=n; i !==e&&(l?u=function(f, h) {
            return n.call(this, at(f), h, e)
        }

        :n.length>2&&(u=function(f, h) {
                return n.call(this, f, h, e)
            })); const d=a.call(i, u, r); return l&&s?s(d):d
}

function fa(e, t, n, r) {
    const s=Mo(e); let o=n; return s !==e&&(Dt(e)?n.length>3&&(o=function(i, l, a) {
                return n.call(this, i, l, a, e)

            }):o=function(i, l, a) {
            return n.call(this, i, at(l), a, e)
        }), s[t](o, ...r)
}

function si(e, t, n) {
    const r=Ee(e); ut(r, "iterate", Es); const s=r[t](...n); return(s===-1||s=== !1)&&Ml(n[0])?(n[0]=Ee(n[0]), r[t](...n)):s
}

function os(e, t, n=[]) {
    qn(), Cl(); const r=Ee(e)[t].apply(e, n); return Ll(), Qn(), r
}

const Nh=wl("__proto__,__v_isRef,__isVue"), qu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !=="arguments" &&e !=="caller").map(e=>Symbol[e]).filter(Kn)); function Fh(e) {
    Kn(e)||(e=String(e)); const t=Ee(this); return ut(t, "has", e), t.hasOwnProperty(e)
}

class Qu {
    constructor(t= !1, n= !1) {
        this._isReadonly=t, this._isShallow=n
    }

    get(t, n, r) {
        const s=this._isReadonly, o=this._isShallow; if(n==="__v_isReactive")return !s; if(n==="__v_isReadonly")return s; if(n==="__v_isShallow")return o; if(n==="__v_raw")return r===(s?o?Qh:Xu:o?Zu:Yu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0; const i=se(t); if( !s) {
            let a; if(i&&(a=Mh[n]))return a; if(n==="hasOwnProperty")return Fh
        }

        const l=Reflect.get(t, n, We(t)?t:r); return(Kn(n)?qu.has(n):Nh(n))||(s||ut(t, "get", n), o)?l:We(l)?i&&xl(n)?l:l.value:De(l)?s?ed(l):zt(l):l
    }
}

class Ju extends Qu {
    constructor(t= !1) {
        super( !1, t)
    }

    set(t, n, r, s) {
        let o=t[n]; if( !this._isShallow) {
            const a=br(o); if( !Dt(r)&& !br(r)&&(o=Ee(o), r=Ee(r)), !se(t)&&We(o)&& !We(r))return a? !1:(o.value=r, !0)
        }

        const i=se(t)&&xl(n)?Number(n)<t.length:Te(t, n), l=Reflect.set(t, n, r, We(t)?t:s); return t===Ee(s)&&(i?zn(r, o)&&vn(t, "set", n, r):vn(t, "add", n, r)), l
    }

    deleteProperty(t, n) {
        const r=Te(t, n); t[n]; const s=Reflect.deleteProperty(t, n); return s&&r&&vn(t, "delete", n, void 0), s
    }

    has(t, n) {
        const r=Reflect.has(t, n); return( !Kn(n)|| !qu.has(n))&&ut(t, "has", n), r
    }

    ownKeys(t) {
        return ut(t, "iterate", se(t)?"length":pr), Reflect.ownKeys(t)
    }
}

class Dh extends Qu {
    constructor(t= !1) {
        super( !0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const $h=new Ju, jh=new Dh, Hh=new Ju( !0); const Al=e=>e, Po=e=>Reflect.getPrototypeOf(e); function qs(e, t, n= !1, r= !1) {
    e=e.__v_raw; const s=Ee(e), o=Ee(t); n||(zn(t, o)&&ut(s, "get", t), ut(s, "get", o)); const {
        has:i
    }

    =Po(s), l=r?Al:n?Pl:at; if(i.call(s, t))return l(e.get(t)); if(i.call(s, o))return l(e.get(o)); e !==s&&e.get(t)
}

function Qs(e, t= !1) {
    const n=this.__v_raw, r=Ee(n), s=Ee(e); return t||(zn(e, s)&&ut(r, "has", e), ut(r, "has", s)), e===s?n.has(e):n.has(e)||n.has(s)
}

function Js(e, t= !1) {
    return e=e.__v_raw, !t&&ut(Ee(e), "iterate", pr), Reflect.get(e, "size", e)
}

function ha(e, t= !1) {
    !t&& !Dt(e)&& !br(e)&&(e=Ee(e)); const n=Ee(this); return Po(n).has.call(n, e)||(n.add(e), vn(n, "add", e, e)), this
}

function pa(e, t, n= !1) {
    !n&& !Dt(t)&& !br(t)&&(t=Ee(t)); const r=Ee(this), {
    has:s, get:o
}

=Po(r); let i=s.call(r, e); i||(e=Ee(e), i=s.call(r, e)); const l=o.call(r, e); return r.set(e, t), i?zn(t, l)&&vn(r, "set", e, t):vn(r, "add", e, t), this
}

function ma(e) {
    const t=Ee(this), {
    has:n, get:r
}

=Po(t); let s=n.call(t, e); s||(e=Ee(e), s=n.call(t, e)), r&&r.call(t, e); const o=t.delete(e); return s&&vn(t, "delete", e, void 0), o
}

function ga() {
    const e=Ee(this), t=e.size !==0, n=e.clear(); return t&&vn(e, "clear", void 0, void 0), n
}

function Ys(e, t) {
    return function(r, s) {
        const o=this, i=o.__v_raw, l=Ee(i), a=t?Al:e?Pl:at; return !e&&ut(l, "iterate", pr), i.forEach((u, d)=>r.call(s, a(u), a(d), o))
    }
}

function Zs(e, t, n) {
    return function(...r) {
        const s=this.__v_raw, o=Ee(s), i=Ar(o), l=e==="entries" ||e===Symbol.iterator&&i, a=e==="keys" &&i, u=s[e](...r), d=n?Al:t?Pl:at; return !t&&ut(o, "iterate", a?Ci:pr), {
        next() {
            const {
                value:f, done:h
            }

            =u.next(); return h? {
                value:f, done:h
            }

            : {
                value:l?[d(f[0]), d(f[1])]:d(f), done:h
            }
        }

        , [Symbol.iterator]() {
            return this
        }
    }
}
}

function Ln(e) {
    return function(...t) {
        return e==="delete" ? !1:e==="clear" ?void 0:this
    }
}

function Uh() {
    const e= {
        get(o) {
            return qs(this, o)
        }

        , get size() {
            return Js(this)
        }

        , has:Qs, add:ha, set:pa, delete:ma, clear:ga, forEach:Ys( !1, !1)
    }

    , t= {
        get(o) {
            return qs(this, o, !1, !0)
        }

        , get size() {
            return Js(this)
        }

        , has:Qs, add(o) {
            return ha.call(this, o, !0)
        }

        , set(o, i) {
            return pa.call(this, o, i, !0)
        }

        , delete:ma, clear:ga, forEach:Ys( !1, !0)
    }

    , n= {
        get(o) {
            return qs(this, o, !0)
        }

        , get size() {
            return Js(this, !0)
        }

        , has(o) {
            return Qs.call(this, o, !0)
        }

        , add:Ln("add"), set:Ln("set"), delete:Ln("delete"), clear:Ln("clear"), forEach:Ys( !0, !1)
    }

    , r= {
        get(o) {
            return qs(this, o, !0, !0)
        }

        , get size() {
            return Js(this, !0)
        }

        , has(o) {
            return Qs.call(this, o, !0)
        }

        , add:Ln("add"), set:Ln("set"), delete:Ln("delete"), clear:Ln("clear"), forEach:Ys( !0, !0)
    }

    ; return["keys", "values", "entries", Symbol.iterator].forEach(o=> {
            e[o]=Zs(o, !1, !1), n[o]=Zs(o, !0, !1), t[o]=Zs(o, !1, !0), r[o]=Zs(o, !0, !0)
        }), [e, n, t, r]
}

const[Bh, Vh, zh, Wh]=Uh(); function Rl(e, t) {
    const n=t?e?Wh:zh:e?Vh:Bh; return(r, s, o)=>s==="__v_isReactive" ? !e:s==="__v_isReadonly" ?e:s==="__v_raw" ?r:Reflect.get(Te(n, s)&&s in r?n:r, s, o)
}

const Gh= {
    get:Rl( !1, !1)
}

, Kh= {
    get:Rl( !1, !0)
}

, qh= {
    get:Rl( !0, !1)
}

; const Yu=new WeakMap, Zu=new WeakMap, Xu=new WeakMap, Qh=new WeakMap; function Jh(e) {
    switch(e) {
        case"Object":case"Array":return 1; case"Map":case"Set":case"WeakMap":case"WeakSet":return 2; default:return 0
    }
}

function Yh(e) {
    return e.__v_skip|| !Object.isExtensible(e)?0:Jh(vh(e))
}

function zt(e) {
    return br(e)?e:kl(e, !1, $h, Gh, Yu)
}

function Il(e) {
    return kl(e, !1, Hh, Kh, Zu)
}

function ed(e) {
    return kl(e, !0, jh, qh, Xu)
}

function kl(e, t, n, r, s) {
    if( !De(e)||e.__v_raw&& !(t&&e.__v_isReactive))return e; const o=s.get(e); if(o)return o; const i=Yh(e); if(i===0)return e; const l=new Proxy(e, i===2?r:n); return s.set(e, l), l
}

function Rr(e) {
    return br(e)?Rr(e.__v_raw): ! !(e&&e.__v_isReactive)
}

function br(e) {
    return ! !(e&&e.__v_isReadonly)
}

function Dt(e) {
    return ! !(e&&e.__v_isShallow)
}

function Ml(e) {
    return e? ! !e.__v_raw: !1
}

function Ee(e) {
    const t=e&&e.__v_raw; return t?Ee(t):e
}

function Zh(e) {
    return !Te(e, "__v_skip")&&Object.isExtensible(e)&&ku(e, "__v_skip", !0), e
}

const at=e=>De(e)?zt(e):e, Pl=e=>De(e)?ed(e):e; function We(e) {
    return e?e.__v_isRef=== !0: !1
}

function ne(e) {
    return nd(e, !1)
}

function td(e) {
    return nd(e, !0)
}

function nd(e, t) {
    return We(e)?e:new Xh(e, t)
}

class Xh {
    constructor(t, n) {
        this.dep=new Ol, this.__v_isRef= !0, this.__v_isShallow= !1, this._rawValue=n?t:Ee(t), this._value=n?t:at(t), this.__v_isShallow=n
    }

    get value() {
        return this.dep.track(), this._value
    }

    set value(t) {
        const n=this._rawValue, r=this.__v_isShallow||Dt(t)||br(t); t=r?t:Ee(t), zn(t, n)&&(this._rawValue=t, this._value=r?t:at(t), this.dep.trigger())
    }
}

function me(e) {
    return We(e)?e.value:e
}

const ep= {
    get:(e, t, n)=>t==="__v_raw" ?e:me(Reflect.get(e, t, n)), set:(e, t, n, r)=> {
        const s=e[t]; return We(s)&& !We(n)?(s.value=n, !0):Reflect.set(e, t, n, r)
    }
}

; function rd(e) {
    return Rr(e)?e:new Proxy(e, ep)
}

function tp(e) {
    const t=se(e)?new Array(e.length): {}

    ; for(const n in e)t[n]=rp(e, n); return t
}

class np {
    constructor(t, n, r) {
        this._object=t, this._key=n, this._defaultValue=r, this.__v_isRef= !0, this._value=void 0
    }

    get value() {
        const t=this._object[this._key]; return this._value=t===void 0?this._defaultValue:t
    }

    set value(t) {
        this._object[this._key]=t
    }

    get dep() {
        return kh(Ee(this._object), this._key)
    }
}

function rp(e, t, n) {
    const r=e[t]; return We(r)?r:new np(e, t, n)
}

class sp {
    constructor(t, n, r) {
        this.fn=t, this.setter=n, this._value=void 0, this.dep=new Ol(this), this.__v_isRef= !0, this.deps=void 0, this.depsTail=void 0, this.flags=16, this.globalVersion=ws-1, this.next=void 0, this.effect=this, this.__v_isReadonly= !n, this.isSSR=r
    }

    notify() {
        if(this.flags|=16, !(this.flags&8)&&Ne !==this)return Bu(this, !0), !0
    }

    get value() {
        const t=this.dep.track(); return Wu(this), t&&(t.version=this.dep.version), this._value
    }

    set value(t) {
        this.setter&&this.setter(t)
    }
}

function op(e, t, n= !1) {
    let r, s; return ie(e)?r=e:(r=e.get, s=e.set), new sp(r, s, n)
}

const Xs= {}

, go=new WeakMap; let rr; function ip(e, t= !1, n=rr) {
    if(n) {
        let r=go.get(n); r||go.set(n, r=[]), r.push(e)
    }
}

function lp(e, t, n=ke) {
    const {
        immediate:r, deep:s, once:o, scheduler:i, augmentJob:l, call:a
    }

    =n, u=x=>s?x:Dt(x)||s=== !1||s===0?gn(x, 1):gn(x); let d, f, h, p, y= !1, w= !1; if(We(e)?(f=()=>e.value, y=Dt(e)):Rr(e)?(f=()=>u(e), y= !0):se(e)?(w= !0, y=e.some(x=>Rr(x)||Dt(x)), f=()=>e.map(x=> {
                    if(We(x))return x.value; if(Rr(x))return u(x); if(ie(x))return a?a(x, 2):x()

                })):ie(e)?t?f=a?()=>a(e, 2):e:f=()=> {
            if(h) {
                qn(); try {
                    h()
                }

                finally {
                    Qn()
                }
            }

            const x=rr; rr=d; try {
                return a?a(e, 3, [p]):e(p)
            }

            finally {
                rr=x
            }
        }

        :f=ln, t&&s) {
        const x=f, M=s=== !0?1/0:s; f=()=>gn(x(), M)
    }

    const E=$u(), b=()=> {
        d.stop(), E&&Sl(E.effects, d)
    }

    ; if(o&&t) {
        const x=t; t=(...M)=> {
            x(...M), b()
        }
    }

    let S=w?new Array(e.length).fill(Xs):Xs; const L=x=> {
        if( !( !(d.flags&1)|| !d.dirty&& !x))if(t) {
            const M=d.run(); if(s||y||(w?M.some(($, R)=>zn($, S[R])):zn(M, S))) {
                h&&h(); const $=rr; rr=d; try {
                    const R=[M, S===Xs?void 0:w&&S[0]===Xs?[]:S, p]; a?a(t, 3, R):t(...R), S=M
                }

                finally {
                    rr=$
                }
            }
        }

        else d.run()
    }

    ; return l&&l(L), d=new Hu(f), d.scheduler=i?()=>i(L, !1):L, p=x=>ip(x, !1, d), h=d.onStop=()=> {
        const x=go.get(d); if(x) {
            if(a)a(x, 4); else for(const M of x)M(); go.delete(d)
        }
    }

    , t?r?L( !0):S=d.run():i?i(L.bind(null, !0), !0):d.run(), b.pause=d.pause.bind(d), b.resume=d.resume.bind(d), b.stop=b, b
}

function gn(e, t=1/0, n) {
    if(t<=0|| !De(e)||e.__v_skip||(n=n||new Set, n.has(e)))return e; if(n.add(e), t--, We(e))gn(e.value, t, n); else if(se(e))for(let r=0; r<e.length; r++)gn(e[r], t, n); else if(Ou(e)||Ar(e))e.forEach(r=> {
            gn(r, t, n)

        }); else if(Iu(e)) {
        for(const r in e)gn(e[r], t, n); for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e, r)&&gn(e[r], t, n)
    }

    return e
}

/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function js(e, t, n, r) {
    try {
        return r?e(...r):e()
    }

    catch(s) {
        No(s, t, n)
    }
}

function Wt(e, t, n, r) {
    if(ie(e)) {
        const s=js(e, t, n, r); return s&&Au(s)&&s.catch(o=> {
                No(o, t, n)
            }), s
    }

    if(se(e)) {
        const s=[]; for(let o=0; o<e.length; o++)s.push(Wt(e[o], t, n, r)); return s
    }
}

function No(e, t, n, r= !0) {
    const s=t?t.vnode:null, {
    errorHandler:o, throwUnhandledErrorInProduction:i
}

=t&&t.appContext.config||ke; if(t) {
    let l=t.parent; const a=t.proxy, u=`https: //vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,a,u)===!1)return}l=l.parent}if(o){qn(),js(o,null,10,[e,a,u]),Qn();return}}ap(e,n,s,r,i)}function ap(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const _t=[];let Zt=-1;const Ir=[];let Mn=null,xr=0;const sd=Promise.resolve();let bo=null;function Hs(e){const t=bo||sd;return e?t.then(this?e.bind(this):e):t}function cp(e){let t=Zt+1,n=_t.length;for(;t<n;){const r=t+n>>>1,s=_t[r],o=Ss(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function Nl(e){if(!(e.flags&1)){const t=Ss(e),n=_t[_t.length-1];!n||!(e.flags&2)&&t>=Ss(n)?_t.push(e):_t.splice(cp(t),0,e),e.flags|=1,od()}}function od(){bo||(bo=sd.then(ld))}function up(e){se(e)?Ir.push(...e):Mn&&e.id===-1?Mn.splice(xr+1,0,e):e.flags&1||(Ir.push(e),e.flags|=1),od()}function ba(e,t,n=Zt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function id(e){if(Ir.length){const t=[...new Set(Ir)].sort((n,r)=>Ss(n)-Ss(r));if(Ir.length=0,Mn){Mn.push(...t);return}for(Mn=t,xr=0;xr<Mn.length;xr++){const n=Mn[xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,xr=0}}const Ss=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ld(e){try{for(Zt=0;Zt<_t.length;Zt++){const t=_t[Zt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),js(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Zt<_t.length;Zt++){const t=_t[Zt];t&&(t.flags&=-2)}Zt=-1,_t.length=0,id(),bo=null,(_t.length||Ir.length)&&ld()}}let Ye=null,ad=null;function _o(e){const t=Ye;return Ye=e,ad=e&&e.type.__scopeId||null,t}function ae(e,t=Ye,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ta(-1);const o=_o(t);let i;try{i=e(...s)}finally{_o(o),r._d&&Ta(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function $t(e,t){if(Ye===null)return e;const n=Uo(Ye),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,l,a=ke]=t[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&gn(i),r.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:a}))}return e}function er(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const l=s[i];o&&(l.oldValue=o[i].value);let a=l.dir[r];a&&(qn(),Wt(a,n,8,[e.el,l,e,t]),Qn())}}const dp=Symbol("_vte"),cd=e=>e.__isTeleport,Pn=Symbol("_leaveCb"),eo=Symbol("_enterCb");function ud(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yn(()=>{e.isMounted=!0}),_d(()=>{e.isUnmounting=!0}),e}const Mt=[Function,Array],dd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},fd=e=>{const t=e.subTree;return t.component?fd(t.component):t},fp={name:"BaseTransition",props:dd,setup(e,{slots:t}){const n=En(),r=ud();return()=>{const s=t.default&&Fl(t.default(),!0);if(!s||!s.length)return;const o=hd(s),i=Ee(e),{mode:l}=i;if(r.isLeaving)return oi(o);const a=_a(o);if(!a)return oi(o);let u=xs(a,i,r,n,h=>u=h);a.type!==vt&&_r(a,u);const d=n.subTree,f=d&&_a(d);if(f&&f.type!==vt&&!sr(a,f)&&fd(n).type!==vt){const h=xs(f,i,r,n);if(_r(f,h),l==="out-in"&&a.type!==vt)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},oi(o);l==="in-out"&&a.type!==vt&&(h.delayLeave=(p,y,w)=>{const E=pd(r,f);E[String(f.key)]=f,p[Pn]=()=>{y(),p[Pn]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}};function hd(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==vt){t=n;break}}return t}const hp=fp;function pd(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function xs(e,t,n,r,s){const{appear:o,mode:i,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:y,onLeaveCancelled:w,onBeforeAppear:E,onAppear:b,onAfterAppear:S,onAppearCancelled:L}=t,x=String(e.key),M=pd(n,e),$=(U,ee)=>{U&&Wt(U,r,9,ee)},R=(U,ee)=>{const re=ee[1];$(U,ee),se(U)?U.every(V=>V.length<=1)&&re():U.length<=1&&re()},G={mode:i,persisted:l,beforeEnter(U){let ee=a;if(!n.isMounted)if(o)ee=E||a;else return;U[Pn]&&U[Pn](!0);const re=M[x];re&&sr(e,re)&&re.el[Pn]&&re.el[Pn](),$(ee,[U])},enter(U){let ee=u,re=d,V=f;if(!n.isMounted)if(o)ee=b||u,re=S||d,V=L||f;else return;let le=!1;const Me=U[eo]=ot=>{le||(le=!0,ot?$(V,[U]):$(re,[U]),G.delayedLeave&&G.delayedLeave(),U[eo]=void 0)};ee?R(ee,[U,Me]):Me()},leave(U,ee){const re=String(e.key);if(U[eo]&&U[eo](!0),n.isUnmounting)return ee();$(h,[U]);let V=!1;const le=U[Pn]=Me=>{V||(V=!0,ee(),Me?$(w,[U]):$(y,[U]),U[Pn]=void 0,M[re]===e&&delete M[re])};M[re]=e,p?R(p,[U,le]):le()},clone(U){const ee=xs(U,t,n,r,s);return s&&s(ee),ee}};return G}function oi(e){if(Fo(e))return e=an(e),e.children=null,e}function _a(e){if(!Fo(e))return cd(e.type)&&e.children?hd(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ie(n.default))return n.default()}}function _r(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_r(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fl(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===we?(i.patchFlag&128&&s++,r=r.concat(Fl(i.children,t,l))):(t||i.type!==vt)&&r.push(l!=null?an(i,{key:l}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Jn(e,t){return ie(e)?Ge({name:e.name},t,{setup:e}):e}function md(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Li(e,t,n,r,s=!1){if(se(e)){e.forEach((y,w)=>Li(y,t&&(se(t)?t[w]:t),n,r,s));return}if(kr(r)&&!s)return;const o=r.shapeFlag&4?Uo(r.component):r.el,i=s?null:o,{i:l,r:a}=e,u=t&&t.r,d=l.refs===ke?l.refs={}:l.refs,f=l.setupState,h=Ee(f),p=f===ke?()=>!1:y=>Te(h,y);if(u!=null&&u!==a&&(Ve(u)?(d[u]=null,p(u)&&(f[u]=null)):We(u)&&(u.value=null)),ie(a))js(a,l,12,[i,d]);else{const y=Ve(a),w=We(a);if(y||w){const E=()=>{if(e.f){const b=y?p(a)?f[a]:d[a]:a.value;s?se(b)&&Sl(b,o):se(b)?b.includes(o)||b.push(o):y?(d[a]=[o],p(a)&&(f[a]=d[a])):(a.value=[o],e.k&&(d[e.k]=a.value))}else y?(d[a]=i,p(a)&&(f[a]=i)):w&&(a.value=i,e.k&&(d[e.k]=i))};i?(E.id=-1,Tt(E,n)):E()}}}const kr=e=>!!e.type.__asyncLoader,Fo=e=>e.type.__isKeepAlive;function pp(e,t){gd(e,"a",t)}function mp(e,t){gd(e,"da",t)}function gd(e,t,n=st){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Do(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Fo(s.parent.vnode)&&gp(r,t,n,s),s=s.parent}}function gp(e,t,n,r){const s=Do(t,e,r,!0);$o(()=>{Sl(r[t],s)},n)}function Do(e,t,n=st,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{qn();const l=Bs(n),a=Wt(t,n,e,i);return l(),Qn(),a});return r?s.unshift(o):s.push(o),o}}const Sn=e=>(t,n=st)=>{(!Ho||e==="sp")&&Do(e,(...r)=>t(...r),n)},bp=Sn("bm"),Yn=Sn("m"),_p=Sn("bu"),bd=Sn("u"),_d=Sn("bum"),$o=Sn("um"),vp=Sn("sp"),yp=Sn("rtg"),wp=Sn("rtc");function Ep(e,t=st){Do("ec",e,t)}const Sp="components";function Kt(e,t){return Cp(Sp,e,!0,t)||e}const xp=Symbol.for("v-ndc");function Cp(e,t,n=!0,r=!1){const s=Ye||st;if(s){const o=s.type;{const l=fm(o,!1);if(l&&(l===t||l===jt(t)||l===ko(jt(t))))return o}const i=va(s[e]||o[e],t)||va(s.appContext[e],t);return!i&&r?o:i}}function va(e,t){return e&&(e[t]||e[jt(t)]||e[ko(jt(t))])}function yn(e,t,n,r){let s;const o=n,i=se(e);if(i||Ve(e)){const l=i&&Rr(e);let a=!1;l&&(a=!Dt(e),e=Mo(e)),s=new Array(e.length);for(let u=0,d=e.length;u<d;u++)s[u]=t(a?at(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,o)}else if(De(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,o));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const d=l[a];s[a]=t(e[d],d,a,o)}}else s=[];return s}function io(e,t,n={},r,s){if(Ye.ce||Ye.parent&&kr(Ye.parent)&&Ye.parent.ce)return t!=="default"&&(n.name=t),J(),Wn(we,null,[B("slot",n,r)],64);let o=e[t];o&&o._c&&(o._d=!1),J();const i=o&&vd(o(n)),l=Wn(we,{key:(n.key||i&&i.key||`_${t}`)+(!i&&r?"_fb":"")},i||[],i&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function vd(e){return e.some(t=>Ls(t)?!(t.type===vt||t.type===we&&!vd(t.children)):!0)?e:null}const Ti=e=>e?jd(e)?Uo(e):Ti(e.parent):null,gs=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ti(e.parent),$root:e=>Ti(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dl(e),$forceUpdate:e=>e.f||(e.f=()=>{Nl(e.update)}),$nextTick:e=>e.n||(e.n=Hs.bind(e.proxy)),$watch:e=>qp.bind(e)}),ii=(e,t)=>e!==ke&&!e.__isScriptSetup&&Te(e,t),Lp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ii(r,t))return i[t]=1,r[t];if(s!==ke&&Te(s,t))return i[t]=2,s[t];if((u=e.propsOptions[0])&&Te(u,t))return i[t]=3,o[t];if(n!==ke&&Te(n,t))return i[t]=4,n[t];Oi&&(i[t]=0)}}const d=gs[t];let f,h;if(d)return t==="$attrs"&&ut(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==ke&&Te(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,Te(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return ii(s,t)?(s[t]=n,!0):r!==ke&&Te(r,t)?(r[t]=n,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let l;return!!n[i]||e!==ke&&Te(e,i)||ii(t,i)||(l=o[0])&&Te(l,i)||Te(r,i)||Te(gs,i)||Te(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ya(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Oi=!0;function Tp(e){const t=Dl(e),n=e.proxy,r=e.ctx;Oi=!1,t.beforeCreate&&wa(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:l,provide:a,inject:u,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:y,activated:w,deactivated:E,beforeDestroy:b,beforeUnmount:S,destroyed:L,unmounted:x,render:M,renderTracked:$,renderTriggered:R,errorCaptured:G,serverPrefetch:U,expose:ee,inheritAttrs:re,components:V,directives:le,filters:Me}=t;if(u&&Op(u,r,null),i)for(const ge in i){const he=i[ge];ie(he)&&(r[ge]=he.bind(n))}if(s){const ge=s.call(n,n);De(ge)&&(e.data=zt(ge))}if(Oi=!0,o)for(const ge in o){const he=o[ge],je=ie(he)?he.bind(n,n):ie(he.get)?he.get.bind(n,n):ln,it=!ie(he)&&ie(he.set)?he.set.bind(n):ln,tt=xe({get:je,set:it});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(l)for(const ge in l)yd(l[ge],r,n,ge);if(a){const ge=ie(a)?a.call(n):a;Reflect.ownKeys(ge).forEach(he=>{At(he,ge[he])})}d&&wa(d,e,"c");function Ie(ge,he){se(he)?he.forEach(je=>ge(je.bind(n))):he&&ge(he.bind(n))}if(Ie(bp,f),Ie(Yn,h),Ie(_p,p),Ie(bd,y),Ie(pp,w),Ie(mp,E),Ie(Ep,G),Ie(wp,$),Ie(yp,R),Ie(_d,S),Ie($o,x),Ie(vp,U),se(ee))if(ee.length){const ge=e.exposed||(e.exposed={});ee.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:je=>n[he]=je})})}else e.exposed||(e.exposed={});M&&e.render===ln&&(e.render=M),re!=null&&(e.inheritAttrs=re),V&&(e.components=V),le&&(e.directives=le),U&&md(e)}function Op(e,t,n=ln){se(e)&&(e=Ai(e));for(const r in e){const s=e[r];let o;De(s)?"default"in s?o=$e(s.from||r,s.default,!0):o=$e(s.from||r):o=$e(s),We(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function wa(e,t,n){Wt(se(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yd(e,t,n,r){let s=r.includes(".")?Md(n,r):()=>n[r];if(Ve(e)){const o=t[e];ie(o)&&Ze(s,o)}else if(ie(e))Ze(s,e.bind(n));else if(De(e))if(se(e))e.forEach(o=>yd(o,t,n,r));else{const o=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(o)&&Ze(s,o,e)}}function Dl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(u=>vo(a,u,i,!0)),vo(a,t,i)),De(t)&&o.set(t,a),a}function vo(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&vo(e,o,n,!0),s&&s.forEach(i=>vo(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const l=Ap[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Ap={data:Ea,props:Sa,emits:Sa,methods:ds,computed:ds,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ds,directives:ds,watch:Ip,provide:Ea,inject:Rp};function Ea(e,t){return t?e?function(){return Ge(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function Rp(e,t){return ds(Ai(e),Ai(t))}function Ai(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ht(e,t){return e?[...new Set([].concat(e,t))]:t}function ds(e,t){return e?Ge(Object.create(null),e,t):t}function Sa(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:Ge(Object.create(null),ya(e),ya(t??{})):t}function Ip(e,t){if(!e)return t;if(!t)return e;const n=Ge(Object.create(null),e);for(const r in t)n[r]=ht(e[r],t[r]);return n}function wd(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kp=0;function Mp(e,t){return function(r,s=null){ie(r)||(r=Ge({},r)),s!=null&&!De(s)&&(s=null);const o=wd(),i=new WeakSet,l=[];let a=!1;const u=o.app={_uid:kp++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:pm,get config(){return o.config},set config(d){},use(d,...f){return i.has(d)||(d&&ie(d.install)?(i.add(d),d.install(u,...f)):ie(d)&&(i.add(d),d(u,...f))),u},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),u},component(d,f){return f?(o.components[d]=f,u):o.components[d]},directive(d,f){return f?(o.directives[d]=f,u):o.directives[d]},mount(d,f,h){if(!a){const p=u._ceVNode||B(r,s);return p.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),f&&t?t(p,d):e(p,d,h),a=!0,u._container=d,d.__vue_app__=u,Uo(p.component)}},onUnmount(d){l.push(d)},unmount(){a&&(Wt(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,f){return o.provides[d]=f,u},runWithContext(d){const f=mr;mr=u;try{return d()}finally{mr=f}}};return u}}let mr=null;function At(e,t){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=st||Ye;if(r||mr){const s=mr?mr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ie(t)?t.call(r&&r.proxy):t}}function Pp(){return!!(st||Ye||mr)}const Ed={},Sd=()=>Object.create(Ed),xd=e=>Object.getPrototypeOf(e)===Ed;function Np(e,t,n,r=!1){const s={},o=Sd();e.propsDefaults=Object.create(null),Cd(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Il(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Fp(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,l=Ee(s),[a]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(jo(e.emitsOptions,h))continue;const p=t[h];if(a)if(Te(o,h))p!==o[h]&&(o[h]=p,u=!0);else{const y=jt(h);s[y]=Ri(a,l,y,p,e,!1)}else p!==o[h]&&(o[h]=p,u=!0)}}}else{Cd(e,t,s,o)&&(u=!0);let d;for(const f in l)(!t||!Te(t,f)&&((d=wr(f))===f||!Te(t,d)))&&(a?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Ri(a,l,f,void 0,e,!0)):delete s[f]);if(o!==l)for(const f in o)(!t||!Te(t,f))&&(delete o[f],u=!0)}u&&vn(e.attrs,"set","")}function Cd(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(hs(a))continue;const u=t[a];let d;s&&Te(s,d=jt(a))?!o||!o.includes(d)?n[d]=u:(l||(l={}))[d]=u:jo(e.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,i=!0)}if(o){const a=Ee(n),u=l||ke;for(let d=0;d<o.length;d++){const f=o[d];n[f]=Ri(s,a,f,u[f],e,!Te(u,f))}}return i}function Ri(e,t,n,r,s,o){const i=e[n];if(i!=null){const l=Te(i,"default");if(l&&r===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&ie(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Bs(s);r=u[n]=a.call(null,t),d()}}else r=a;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!l?r=!1:i[1]&&(r===""||r===wr(n))&&(r=!0))}return r}const Dp=new WeakMap;function Ld(e,t,n=!1){const r=n?Dp:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},l=[];let a=!1;if(!ie(e)){const d=f=>{a=!0;const[h,p]=Ld(f,t,!0);Ge(i,h),p&&l.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!a)return De(e)&&r.set(e,Or),Or;if(se(o))for(let d=0;d<o.length;d++){const f=jt(o[d]);xa(f)&&(i[f]=ke)}else if(o)for(const d in o){const f=jt(d);if(xa(f)){const h=o[d],p=i[f]=se(h)||ie(h)?{type:h}:Ge({},h),y=p.type;let w=!1,E=!0;if(se(y))for(let b=0;b<y.length;++b){const S=y[b],L=ie(S)&&S.name;if(L==="Boolean"){w=!0;break}else L==="String"&&(E=!1)}else w=ie(y)&&y.name==="Boolean";p[0]=w,p[1]=E,(w||Te(p,"default"))&&l.push(f)}}const u=[i,l];return De(e)&&r.set(e,u),u}function xa(e){return e[0]!=="$"&&!hs(e)}const Td=e=>e[0]==="_"||e==="$stable",$l=e=>se(e)?e.map(rn):[rn(e)],$p=(e,t,n)=>{if(t._n)return t;const r=ae((...s)=>$l(t(...s)),n);return r._c=!1,r},Od=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Td(s))continue;const o=e[s];if(ie(o))t[s]=$p(s,o,r);else if(o!=null){const i=$l(o);t[s]=()=>i}}},Ad=(e,t)=>{const n=$l(t);e.slots.default=()=>n},Rd=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},jp=(e,t,n)=>{const r=e.slots=Sd();if(e.vnode.shapeFlag&32){const s=t._;s?(Rd(r,t,n),n&&ku(r,"_",s,!0)):Od(t,r)}else t&&Ad(e,t)},Hp=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=ke;if(r.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Rd(s,t,n):(o=!t.$stable,Od(t,s)),i=t}else t&&(Ad(e,t),i={default:1});if(o)for(const l in s)!Td(l)&&i[l]==null&&delete s[l]},Tt=tm;function Up(e){return Bp(e)}function Bp(e,t){const n=Mu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:l,createComment:a,setText:u,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=ln,insertStaticContent:y}=e,w=(_,g,A,D=null,N=null,m=null,v=void 0,O=null,k=!!g.dynamicChildren)=>{if(_===g)return;_&&!sr(_,g)&&(D=H(_),Pe(_,N,m,!0),_=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:j,ref:z,shapeFlag:C}=g;switch(j){case Us:E(_,g,A,D);break;case vt:b(_,g,A,D);break;case lo:_==null&&S(g,A,D,v);break;case we:V(_,g,A,D,N,m,v,O,k);break;default:C&1?M(_,g,A,D,N,m,v,O,k):C&6?le(_,g,A,D,N,m,v,O,k):(C&64||C&128)&&j.process(_,g,A,D,N,m,v,O,k,Y)}z!=null&&N&&Li(z,_&&_.ref,m,g||_,!g)},E=(_,g,A,D)=>{if(_==null)r(g.el=l(g.children),A,D);else{const N=g.el=_.el;g.children!==_.children&&u(N,g.children)}},b=(_,g,A,D)=>{_==null?r(g.el=a(g.children||""),A,D):g.el=_.el},S=(_,g,A,D)=>{[_.el,_.anchor]=y(_.children,g,A,D,_.el,_.anchor)},L=({el:_,anchor:g},A,D)=>{let N;for(;_&&_!==g;)N=h(_),r(_,A,D),_=N;r(g,A,D)},x=({el:_,anchor:g})=>{let A;for(;_&&_!==g;)A=h(_),s(_),_=A;s(g)},M=(_,g,A,D,N,m,v,O,k)=>{g.type==="svg"?v="svg":g.type==="math"&&(v="mathml"),_==null?$(g,A,D,N,m,v,O,k):U(_,g,N,m,v,O,k)},$=(_,g,A,D,N,m,v,O)=>{let k,j;const{props:z,shapeFlag:C,transition:I,dirs:q}=_;if(k=_.el=i(_.type,m,z&&z.is,z),C&8?d(k,_.children):C&16&&G(_.children,k,null,D,N,li(_,m),v,O),q&&er(_,null,D,"created"),R(k,_,_.scopeId,v,D),z){for(const ve in z)ve!=="value"&&!hs(ve)&&o(k,ve,null,z[ve],m,D);"value"in z&&o(k,"value",null,z.value,m),(j=z.onVnodeBeforeMount)&&Jt(j,D,_)}q&&er(_,null,D,"beforeMount");const te=Vp(N,I);te&&I.beforeEnter(k),r(k,g,A),((j=z&&z.onVnodeMounted)||te||q)&&Tt(()=>{j&&Jt(j,D,_),te&&I.enter(k),q&&er(_,null,D,"mounted")},N)},R=(_,g,A,D,N)=>{if(A&&p(_,A),D)for(let m=0;m<D.length;m++)p(_,D[m]);if(N){let m=N.subTree;if(g===m||Nd(m.type)&&(m.ssContent===g||m.ssFallback===g)){const v=N.vnode;R(_,v,v.scopeId,v.slotScopeIds,N.parent)}}},G=(_,g,A,D,N,m,v,O,k=0)=>{for(let j=k;j<_.length;j++){const z=_[j]=O?Nn(_[j]):rn(_[j]);w(null,z,g,A,D,N,m,v,O)}},U=(_,g,A,D,N,m,v)=>{const O=g.el=_.el;let{patchFlag:k,dynamicChildren:j,dirs:z}=g;k|=_.patchFlag&16;const C=_.props||ke,I=g.props||ke;let q;if(A&&tr(A,!1),(q=I.onVnodeBeforeUpdate)&&Jt(q,A,g,_),z&&er(g,_,A,"beforeUpdate"),A&&tr(A,!0),(C.innerHTML&&I.innerHTML==null||C.textContent&&I.textContent==null)&&d(O,""),j?ee(_.dynamicChildren,j,O,A,D,li(g,N),m):v||he(_,g,O,null,A,D,li(g,N),m,!1),k>0){if(k&16)re(O,C,I,A,N);else if(k&2&&C.class!==I.class&&o(O,"class",null,I.class,N),k&4&&o(O,"style",C.style,I.style,N),k&8){const te=g.dynamicProps;for(let ve=0;ve<te.length;ve++){const ye=te[ve],ze=C[ye],rt=I[ye];(rt!==ze||ye==="value")&&o(O,ye,ze,rt,N,A)}}k&1&&_.children!==g.children&&d(O,g.children)}else!v&&j==null&&re(O,C,I,A,N);((q=I.onVnodeUpdated)||z)&&Tt(()=>{q&&Jt(q,A,g,_),z&&er(g,_,A,"updated")},D)},ee=(_,g,A,D,N,m,v)=>{for(let O=0;O<g.length;O++){const k=_[O],j=g[O],z=k.el&&(k.type===we||!sr(k,j)||k.shapeFlag&70)?f(k.el):A;w(k,j,z,null,D,N,m,v,!0)}},re=(_,g,A,D,N)=>{if(g!==A){if(g!==ke)for(const m in g)!hs(m)&&!(m in A)&&o(_,m,g[m],null,N,D);for(const m in A){if(hs(m))continue;const v=A[m],O=g[m];v!==O&&m!=="value"&&o(_,m,O,v,N,D)}"value"in A&&o(_,"value",g.value,A.value,N)}},V=(_,g,A,D,N,m,v,O,k)=>{const j=g.el=_?_.el:l(""),z=g.anchor=_?_.anchor:l("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:q}=g;q&&(O=O?O.concat(q):q),_==null?(r(j,A,D),r(z,A,D),G(g.children||[],A,z,N,m,v,O,k)):C>0&&C&64&&I&&_.dynamicChildren?(ee(_.dynamicChildren,I,A,N,m,v,O),(g.key!=null||N&&g===N.subTree)&&Id(_,g,!0)):he(_,g,A,z,N,m,v,O,k)},le=(_,g,A,D,N,m,v,O,k)=>{g.slotScopeIds=O,_==null?g.shapeFlag&512?N.ctx.activate(g,A,D,v,k):Me(g,A,D,N,m,v,k):ot(_,g,k)},Me=(_,g,A,D,N,m,v)=>{const O=_.component=lm(_,D,N);if(Fo(_)&&(O.ctx.renderer=Y),am(O,!1,v),O.asyncDep){if(N&&N.registerDep(O,Ie,v),!_.el){const k=O.subTree=B(vt);b(null,k,g,A)}}else Ie(O,_,g,A,N,m,v)},ot=(_,g,A)=>{const D=g.component=_.component;if(Xp(_,g,A))if(D.asyncDep&&!D.asyncResolved){ge(D,g,A);return}else D.next=g,D.update();else g.el=_.el,D.vnode=g},Ie=(_,g,A,D,N,m,v)=>{const O=()=>{if(_.isMounted){let{next:C,bu:I,u:q,parent:te,vnode:ve}=_;{const Ct=kd(_);if(Ct){C&&(C.el=ve.el,ge(_,C,v)),Ct.asyncDep.then(()=>{_.isUnmounted||O()});return}}let ye=C,ze;tr(_,!1),C?(C.el=ve.el,ge(_,C,v)):C=ve,I&&oo(I),(ze=C.props&&C.props.onVnodeBeforeUpdate)&&Jt(ze,te,C,ve),tr(_,!0);const rt=ai(_),kt=_.subTree;_.subTree=rt,w(kt,rt,f(kt.el),H(kt),_,N,m),C.el=rt.el,ye===null&&em(_,rt.el),q&&Tt(q,N),(ze=C.props&&C.props.onVnodeUpdated)&&Tt(()=>Jt(ze,te,C,ve),N)}else{let C;const{el:I,props:q}=g,{bm:te,m:ve,parent:ye,root:ze,type:rt}=_,kt=kr(g);if(tr(_,!1),te&&oo(te),!kt&&(C=q&&q.onVnodeBeforeMount)&&Jt(C,ye,g),tr(_,!0),I&&Ce){const Ct=()=>{_.subTree=ai(_),Ce(I,_.subTree,_,N,null)};kt&&rt.__asyncHydrate?rt.__asyncHydrate(I,_,Ct):Ct()}else{ze.ce&&ze.ce._injectChildStyle(rt);const Ct=_.subTree=ai(_);w(null,Ct,A,D,_,N,m),g.el=Ct.el}if(ve&&Tt(ve,N),!kt&&(C=q&&q.onVnodeMounted)){const Ct=g;Tt(()=>Jt(C,ye,Ct),N)}(g.shapeFlag&256||ye&&kr(ye.vnode)&&ye.vnode.shapeFlag&256)&&_.a&&Tt(_.a,N),_.isMounted=!0,g=A=D=null}};_.scope.on();const k=_.effect=new Hu(O);_.scope.off();const j=_.update=k.run.bind(k),z=_.job=k.runIfDirty.bind(k);z.i=_,z.id=_.uid,k.scheduler=()=>Nl(z),tr(_,!0),j()},ge=(_,g,A)=>{g.component=_;const D=_.vnode.props;_.vnode=g,_.next=null,Fp(_,g.props,D,A),Hp(_,g.children,A),qn(),ba(_),Qn()},he=(_,g,A,D,N,m,v,O,k=!1)=>{const j=_&&_.children,z=_?_.shapeFlag:0,C=g.children,{patchFlag:I,shapeFlag:q}=g;if(I>0){if(I&128){it(j,C,A,D,N,m,v,O,k);return}else if(I&256){je(j,C,A,D,N,m,v,O,k);return}}q&8?(z&16&&qe(j,N,m),C!==j&&d(A,C)):z&16?q&16?it(j,C,A,D,N,m,v,O,k):qe(j,N,m,!0):(z&8&&d(A,""),q&16&&G(C,A,D,N,m,v,O,k))},je=(_,g,A,D,N,m,v,O,k)=>{_=_||Or,g=g||Or;const j=_.length,z=g.length,C=Math.min(j,z);let I;for(I=0;I<C;I++){const q=g[I]=k?Nn(g[I]):rn(g[I]);w(_[I],q,A,null,N,m,v,O,k)}j>z?qe(_,N,m,!0,!1,C):G(g,A,D,N,m,v,O,k,C)},it=(_,g,A,D,N,m,v,O,k)=>{let j=0;const z=g.length;let C=_.length-1,I=z-1;for(;j<=C&&j<=I;){const q=_[j],te=g[j]=k?Nn(g[j]):rn(g[j]);if(sr(q,te))w(q,te,A,null,N,m,v,O,k);else break;j++}for(;j<=C&&j<=I;){const q=_[C],te=g[I]=k?Nn(g[I]):rn(g[I]);if(sr(q,te))w(q,te,A,null,N,m,v,O,k);else break;C--,I--}if(j>C){if(j<=I){const q=I+1,te=q<z?g[q].el:D;for(;j<=I;)w(null,g[j]=k?Nn(g[j]):rn(g[j]),A,te,N,m,v,O,k),j++}}else if(j>I)for(;j<=C;)Pe(_[j],N,m,!0),j++;else{const q=j,te=j,ve=new Map;for(j=te;j<=I;j++){const Lt=g[j]=k?Nn(g[j]):rn(g[j]);Lt.key!=null&&ve.set(Lt.key,j)}let ye,ze=0;const rt=I-te+1;let kt=!1,Ct=0;const ss=new Array(rt);for(j=0;j<rt;j++)ss[j]=0;for(j=q;j<=C;j++){const Lt=_[j];if(ze>=rt){Pe(Lt,N,m,!0);continue}let Qt;if(Lt.key!=null)Qt=ve.get(Lt.key);else for(ye=te;ye<=I;ye++)if(ss[ye-te]===0&&sr(Lt,g[ye])){Qt=ye;break}Qt===void 0?Pe(Lt,N,m,!0):(ss[Qt-te]=j+1,Qt>=Ct?Ct=Qt:kt=!0,w(Lt,g[Qt],A,null,N,m,v,O,k),ze++)}const la=kt?zp(ss):Or;for(ye=la.length-1,j=rt-1;j>=0;j--){const Lt=te+j,Qt=g[Lt],aa=Lt+1<z?g[Lt+1].el:D;ss[j]===0?w(null,Qt,A,aa,N,m,v,O,k):kt&&(ye<0||j!==la[ye]?tt(Qt,A,aa,2):ye--)}}},tt=(_,g,A,D,N=null)=>{const{el:m,type:v,transition:O,children:k,shapeFlag:j}=_;if(j&6){tt(_.component.subTree,g,A,D);return}if(j&128){_.suspense.move(g,A,D);return}if(j&64){v.move(_,g,A,Y);return}if(v===we){r(m,g,A);for(let C=0;C<k.length;C++)tt(k[C],g,A,D);r(_.anchor,g,A);return}if(v===lo){L(_,g,A);return}if(D!==2&&j&1&&O)if(D===0)O.beforeEnter(m),r(m,g,A),Tt(()=>O.enter(m),N);else{const{leave:C,delayLeave:I,afterLeave:q}=O,te=()=>r(m,g,A),ve=()=>{C(m,()=>{te(),q&&q()})};I?I(m,te,ve):ve()}else r(m,g,A)},Pe=(_,g,A,D=!1,N=!1)=>{const{type:m,props:v,ref:O,children:k,dynamicChildren:j,shapeFlag:z,patchFlag:C,dirs:I,cacheIndex:q}=_;if(C===-2&&(N=!1),O!=null&&Li(O,null,A,_,!0),q!=null&&(g.renderCache[q]=void 0),z&256){g.ctx.deactivate(_);return}const te=z&1&&I,ve=!kr(_);let ye;if(ve&&(ye=v&&v.onVnodeBeforeUnmount)&&Jt(ye,g,_),z&6)Ht(_.component,A,D);else{if(z&128){_.suspense.unmount(A,D);return}te&&er(_,null,g,"beforeUnmount"),z&64?_.type.remove(_,g,A,Y,D):j&&!j.hasOnce&&(m!==we||C>0&&C&64)?qe(j,g,A,!1,!0):(m===we&&C&384||!N&&z&16)&&qe(k,g,A),D&&nt(_)}(ve&&(ye=v&&v.onVnodeUnmounted)||te)&&Tt(()=>{ye&&Jt(ye,g,_),te&&er(_,null,g,"unmounted")},A)},nt=_=>{const{type:g,el:A,anchor:D,transition:N}=_;if(g===we){ft(A,D);return}if(g===lo){x(_);return}const m=()=>{s(A),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:v,delayLeave:O}=N,k=()=>v(A,m);O?O(_.el,m,k):k()}else m()},ft=(_,g)=>{let A;for(;_!==g;)A=h(_),s(_),_=A;s(g)},Ht=(_,g,A)=>{const{bum:D,scope:N,job:m,subTree:v,um:O,m:k,a:j}=_;Ca(k),Ca(j),D&&oo(D),N.stop(),m&&(m.flags|=8,Pe(v,_,g,A)),O&&Tt(O,g),Tt(()=>{_.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},qe=(_,g,A,D=!1,N=!1,m=0)=>{for(let v=m;v<_.length;v++)Pe(_[v],g,A,D,N)},H=_=>{if(_.shapeFlag&6)return H(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const g=h(_.anchor||_.el),A=g&&g[dp];return A?h(A):g};let K=!1;const W=(_,g,A)=>{_==null?g._vnode&&Pe(g._vnode,null,null,!0):w(g._vnode||null,_,g,null,null,null,A),g._vnode=_,K||(K=!0,ba(),id(),K=!1)},Y={p:w,um:Pe,m:tt,r:nt,mt:Me,mc:G,pc:he,pbc:ee,n:H,o:e};let pe,Ce;return{render:W,hydrate:pe,createApp:Mp(W,pe)}}function li({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Vp(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Id(e,t,n=!1){const r=e.children,s=t.children;if(se(r)&&se(s))for(let o=0;o<r.length;o++){const i=r[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=Nn(s[o]),l.el=i.el),!n&&l.patchFlag!==-2&&Id(i,l)),l.type===Us&&(l.el=i.el)}}function zp(e){const t=e.slice(),n=[0];let r,s,o,i,l;const a=e.length;for(r=0;r<a;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<u?o=l+1:i=l;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function kd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:kd(t)}function Ca(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Wp=Symbol.for("v-scx"),Gp=()=>$e(Wp);function Kp(e,t){return jl(e,null,t)}function Ze(e,t,n){return jl(e,t,n)}function jl(e,t,n=ke){const{immediate:r,deep:s,flush:o,once:i}=n,l=Ge({},n);let a;if(Ho)if(o==="sync"){const h=Gp();a=h.__watcherHandles||(h.__watcherHandles=[])}else if(!t||r)l.once=!0;else{const h=()=>{};return h.stop=ln,h.resume=ln,h.pause=ln,h}const u=st;l.call=(h,p,y)=>Wt(h,u,p,y);let d=!1;o==="post"?l.scheduler=h=>{Tt(h,u&&u.suspense)}:o!=="sync"&&(d=!0,l.scheduler=(h,p)=>{p?h():Nl(h)}),l.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=lp(e,t,l);return a&&a.push(f),f}function qp(e,t,n){const r=this.proxy,s=Ve(e)?e.includes(".")?Md(r,e):()=>r[e]:e.bind(r,r);let o;ie(t)?o=t:(o=t.handler,n=t);const i=Bs(this),l=jl(s,o.bind(r),n);return i(),l}function Md(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qp=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${jt(t)}Modifiers`]||e[`${wr(t)}Modifiers`];function Jp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ke;let s=n;const o=t.startsWith("update:"),i=o&&Qp(r,t.slice(7));i&&(i.trim&&(s=n.map(d=>Ve(d)?d.trim():d)),i.number&&(s=n.map(Si)));let l,a=r[l=ei(t)]||r[l=ei(jt(t))];!a&&o&&(a=r[l=ei(wr(t))]),a&&Wt(a,e,6,s);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Wt(u,e,6,s)}}function Pd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},l=!1;if(!ie(e)){const a=u=>{const d=Pd(u,t,!0);d&&(l=!0,Ge(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(De(e)&&r.set(e,null),null):(se(o)?o.forEach(a=>i[a]=null):Ge(i,o),De(e)&&r.set(e,i),i)}function jo(e,t){return!e||!Ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,wr(t))||Te(e,t))}function ai(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:l,emit:a,render:u,renderCache:d,props:f,data:h,setupState:p,ctx:y,inheritAttrs:w}=e,E=_o(e);let b,S;try{if(n.shapeFlag&4){const x=s||r,M=x;b=rn(u.call(M,x,d,f,p,h,y)),S=l}else{const x=t;b=rn(x.length>1?x(f,{attrs:l,slots:i,emit:a}):x(f,null)),S=t.props?l:Yp(l)}}catch(x){bs.length=0,No(x,e,1),b=B(vt)}let L=b;if(S&&w!==!1){const x=Object.keys(S),{shapeFlag:M}=L;x.length&&M&7&&(o&&x.some(El)&&(S=Zp(S,o)),L=an(L,S,!1,!0))}return n.dirs&&(L=an(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&_r(L,n.transition),b=L,_o(E),b}const Yp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ao(n))&&((t||(t={}))[n]=e[n]);return t},Zp=(e,t)=>{const n={};for(const r in e)(!El(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xp(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:l,patchFlag:a}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?La(r,i,u):!!i;if(a&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(i[h]!==r[h]&&!jo(u,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?La(r,i,u):!0:!!i;return!1}function La(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!jo(n,o))return!0}return!1}function em({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Nd=e=>e.__isSuspense;function tm(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):up(e)}const we=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),lo=Symbol.for("v-stc"),bs=[];let Rt=null;function J(e=!1){bs.push(Rt=e?null:[])}function nm(){bs.pop(),Rt=bs[bs.length-1]||null}let Cs=1;function Ta(e){Cs+=e,e<0&&Rt&&(Rt.hasOnce=!0)}function Fd(e){return e.dynamicChildren=Cs>0?Rt||Or:null,nm(),Cs>0&&Rt&&Rt.push(e),e}function X(e,t,n,r,s,o){return Fd(c(e,t,n,r,s,o,!0))}function Wn(e,t,n,r,s){return Fd(B(e,t,n,r,s,!0))}function Ls(e){return e?e.__v_isVNode===!0:!1}function sr(e,t){return e.type===t.type&&e.key===t.key}const Dd=({key:e})=>e??null,ao=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||We(e)||ie(e)?{i:Ye,r:e,k:t,f:!!n}:e:null);function c(e,t=null,n=null,r=0,s=null,o=e===we?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dd(t),ref:t&&ao(t),scopeId:ad,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return l?(Hl(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=Ve(n)?8:16),Cs>0&&!i&&Rt&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Rt.push(a),a}const B=rm;function rm(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===xp)&&(e=vt),Ls(e)){const l=an(e,t,!0);return n&&Hl(l,n),Cs>0&&!o&&Rt&&(l.shapeFlag&6?Rt[Rt.indexOf(e)]=l:Rt.push(l)),l.patchFlag=-2,l}if(hm(e)&&(e=e.__vccOpts),t){t=sm(t);let{class:l,style:a}=t;l&&!Ve(l)&&(t.class=sn(l)),De(a)&&(Ml(a)&&!se(a)&&(a=Ge({},a)),t.style=Kr(a))}const i=Ve(e)?1:Nd(e)?128:cd(e)?64:De(e)?4:ie(e)?2:0;return c(e,t,n,r,s,i,o,!0)}function sm(e){return e?Ml(e)||xd(e)?Ge({},e):e:null}function an(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:l,transition:a}=e,u=t?$d(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Dd(u),ref:t&&t.ref?n&&o?se(o)?o.concat(ao(t)):[o,ao(t)]:ao(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&_r(d,a.clone(d)),d}function ue(e=" ",t=0){return B(Us,null,e,t)}function qr(e,t){const n=B(lo,null,e);return n.staticCount=t,n}function Xe(e="",t=!1){return t?(J(),Wn(vt,null,e)):B(vt,null,e)}function rn(e){return e==null||typeof e=="boolean"?B(vt):se(e)?B(we,null,e.slice()):Ls(e)?Nn(e):B(Us,null,String(e))}function Nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:an(e)}function Hl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Hl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!xd(t)?t._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),r&64?(n=16,t=[ue(t)]):n=8);e.children=t,e.shapeFlag|=n}function $d(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=sn([t.class,r.class]));else if(s==="style")t.style=Kr([t.style,r.style]);else if(Ao(s)){const o=t[s],i=r[s];i&&o!==i&&!(se(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Jt(e,t,n,r=null){Wt(e,t,7,[n,r])}const om=wd();let im=0;function lm(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||om,o={uid:im++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ld(r,s),emitsOptions:Pd(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Jp.bind(null,o),e.ce&&e.ce(o),o}let st=null;const En=()=>st||Ye;let yo,Ii;{const e=Mu(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};yo=t("__VUE_INSTANCE_SETTERS__",n=>st=n),Ii=t("__VUE_SSR_SETTERS__",n=>Ho=n)}const Bs=e=>{const t=st;return yo(e),e.scope.on(),()=>{e.scope.off(),yo(t)}},Oa=()=>{st&&st.scope.off(),yo(null)};function jd(e){return e.vnode.shapeFlag&4}let Ho=!1;function am(e,t=!1,n=!1){t&&Ii(t);const{props:r,children:s}=e.vnode,o=jd(e);Np(e,r,o,t),jp(e,s,n);const i=o?cm(e,t):void 0;return t&&Ii(!1),i}function cm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Lp);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?dm(e):null,o=Bs(e);qn();const i=js(r,e,0,[e.props,s]);if(Qn(),o(),Au(i)){if(kr(e)||md(e),i.then(Oa,Oa),t)return i.then(l=>{Aa(e,l,t)}).catch(l=>{No(l,e,0)});e.asyncDep=i}else Aa(e,i,t)}else Hd(e,t)}function Aa(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:De(t)&&(e.setupState=rd(t)),Hd(e,n)}let Ra;function Hd(e,t,n){const r=e.type;if(!e.render){if(!t&&Ra&&!r.render){const s=r.template||Dl(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,u=Ge(Ge({isCustomElement:o,delimiters:l},i),a);r.render=Ra(s,u)}}e.render=r.render||ln}{const s=Bs(e);qn();try{Tp(e)}finally{Qn(),s()}}}const um={get(e,t){return ut(e,"get",""),e[t]}};function dm(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,um),slots:e.slots,emit:e.emit,expose:t}}function Uo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(rd(Zh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}})):e.proxy}function fm(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function hm(e){return ie(e)&&"__vccOpts"in e}const xe=(e,t)=>op(e,t,Ho);function Be(e,t,n){const r=arguments.length;return r===2?De(t)&&!se(t)?Ls(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ls(n)&&(n=[n]),B(e,t,n))}const pm="3.5.11";/**

    * @vue/runtime-dom v3.5.11 * (c) 2018-present Yuxi (Evan) You and Vue contributors * @license MIT **/let ki; const Ia=typeof window<"u" &&window.trustedTypes; if(Ia)try {
        ki=Ia.createPolicy("vue", {
            createHTML:e=>e
        })
}

catch {}

const Ud=ki?e=>ki.createHTML(e):e=>e, mm="http://www.w3.org/2000/svg", gm="http://www.w3.org/1998/Math/MathML", pn=typeof document<"u" ?document:null, ka=pn&&pn.createElement("template"), bm= {
    insert:(e, t, n)=> {
        t.insertBefore(e, n||null)
    }

    , remove:e=> {
        const t=e.parentNode; t&&t.removeChild(e)
    }

    , createElement:(e, t, n, r)=> {
        const s=t==="svg" ?pn.createElementNS(mm, e):t==="mathml" ?pn.createElementNS(gm, e):n?pn.createElement(e, {
            is:n
        }):pn.createElement(e); return e==="select" &&r&&r.multiple !=null&&s.setAttribute("multiple", r.multiple), s
}

, createText:e=>pn.createTextNode(e), createComment:e=>pn.createComment(e), setText:(e, t)=> {
    e.nodeValue=t
}

, setElementText:(e, t)=> {
    e.textContent=t
}

, parentNode:e=>e.parentNode, nextSibling:e=>e.nextSibling, querySelector:e=>pn.querySelector(e), setScopeId(e, t) {
    e.setAttribute(t, "")
}

, insertStaticContent(e, t, n, r, s, o) {
    const i=n?n.previousSibling:t.lastChild; if(s&&(s===o||s.nextSibling))for(; t.insertBefore(s.cloneNode( !0), n), !(s===o|| !(s=s.nextSibling)); ); else {
        ka.innerHTML=Ud(r==="svg" ?`<svg>$ {
                e
            }

            </svg>`:r==="mathml" ?`<math>$ {
                e
            }

            </math>`:e); const l=ka.content; if(r==="svg" ||r==="mathml") {
            const a=l.firstChild; for(; a.firstChild; )l.appendChild(a.firstChild); l.removeChild(a)
        }

        t.insertBefore(l, n)
    }

    return[i?i.nextSibling:t.firstChild, n?n.previousSibling:t.lastChild]
}
}

, Tn="transition", is="animation", Qr=Symbol("_vtc"), Bd= {
    name:String, type:String, css: {
        type:Boolean, default: !0
    }

    , duration:[String, Number, Object], enterFromClass:String, enterActiveClass:String, enterToClass:String, appearFromClass:String, appearActiveClass:String, appearToClass:String, leaveFromClass:String, leaveActiveClass:String, leaveToClass:String
}

, Vd=Ge({}

, dd, Bd), _m=e=>(e.displayName="Transition", e.props=Vd, e), Gn=_m((e, {
        slots:t

    })=>Be(hp, zd(e), t)), nr=(e, t=[])=> {
    se(e)?e.forEach(n=>n(...t)):e&&e(...t)
}

, Ma=e=>e?se(e)?e.some(t=>t.length>1):e.length>1: !1; function zd(e) {
    const t= {}

    ; for(const V in e)V in Bd||(t[V]=e[V]); if(e.css=== !1)return t; const {
        name:n="v", type:r, duration:s, enterFromClass:o=`$ {
            n
        }

        -enter-from`, enterActiveClass:i=`$ {
            n
        }

        -enter-active`, enterToClass:l=`$ {
            n
        }

        -enter-to`, appearFromClass:a=o, appearActiveClass:u=i, appearToClass:d=l, leaveFromClass:f=`$ {
            n
        }

        -leave-from`, leaveActiveClass:h=`$ {
            n
        }

        -leave-active`, leaveToClass:p=`$ {
            n
        }

        -leave-to`
    }

    =e, y=vm(s), w=y&&y[0], E=y&&y[1], {
    onBeforeEnter:b, onEnter:S, onEnterCancelled:L, onLeave:x, onLeaveCancelled:M, onBeforeAppear:$=b, onAppear:R=S, onAppearCancelled:G=L
}

=t, U=(V, le, Me)=> {
    In(V, le?d:l), In(V, le?u:i), Me&&Me()
}

, ee=(V, le)=> {
    V._isLeaving= !1, In(V, f), In(V, p), In(V, h), le&&le()
}

, re=V=>(le, Me)=> {
    const ot=V?R:S, Ie=()=>U(le, V, Me); nr(ot, [le, Ie]), Pa(()=> {
            In(le, V?a:o), fn(le, V?d:l), Ma(ot)||Na(le, r, w, Ie)
        })
}

; return Ge(t, {
    onBeforeEnter(V) {
        nr(b, [V]), fn(V, o), fn(V, i)
    }

    , onBeforeAppear(V) {
        nr($, [V]), fn(V, a), fn(V, u)
    }

    , onEnter:re( !1), onAppear:re( !0), onLeave(V, le) {
        V._isLeaving= !0; const Me=()=>ee(V, le); fn(V, f), fn(V, h), Gd(), Pa(()=> {
                V._isLeaving&&(In(V, f), fn(V, p), Ma(x)||Na(V, r, E, Me))
            }), nr(x, [V, Me])
    }

    , onEnterCancelled(V) {
        U(V, !1), nr(L, [V])
    }

    , onAppearCancelled(V) {
        U(V, !0), nr(G, [V])
    }

    , onLeaveCancelled(V) {
        ee(V), nr(M, [V])
    }
})
}

function vm(e) {
    if(e==null)return null; if(De(e))return[ci(e.enter), ci(e.leave)]; {
        const t=ci(e); return[t, t]
    }
}

function ci(e) {
    return Eh(e)
}

function fn(e, t) {
    t.split(/\s+/).forEach(n=>n&&e.classList.add(n)), (e[Qr]||(e[Qr]=new Set)).add(t)
}

function In(e, t) {
    t.split(/\s+/).forEach(r=>r&&e.classList.remove(r)); const n=e[Qr]; n&&(n.delete(t), n.size||(e[Qr]=void 0))
}

function Pa(e) {
    requestAnimationFrame(()=> {
            requestAnimationFrame(e)
        })
}

let ym=0; function Na(e, t, n, r) {
    const s=e._endId=++ym, o=()=> {
        s===e._endId&&r()
    }

    ; if(n !=null)return setTimeout(o, n); const {
        type:i, timeout:l, propCount:a
    }

    =Wd(e, t); if( !i)return r(); const u=i+"end"; let d=0; const f=()=> {
        e.removeEventListener(u, h), o()
    }

    , h=p=> {
        p.target===e&&++d>=a&&f()
    }

    ; setTimeout(()=> {
            d<a&&f()
        }

        , l+1), e.addEventListener(u, h)
}

function Wd(e, t) {
    const n=window.getComputedStyle(e), r=y=>(n[y]||"").split(", "), s=r(`$ {
            Tn
        }

        Delay`), o=r(`$ {
            Tn
        }

        Duration`), i=Fa(s, o), l=r(`$ {
            is
        }

        Delay`), a=r(`$ {
            is
        }

        Duration`), u=Fa(l, a); let d=null, f=0, h=0; t===Tn?i>0&&(d=Tn, f=i, h=o.length):t===is?u>0&&(d=is, f=u, h=a.length):(f=Math.max(i, u), d=f>0?i>u?Tn:is:null, h=d?d===Tn?o.length:a.length:0); const p=d===Tn&&/\b(transform|all)(, |$)/.test(r(`$ {
                Tn
            }

            Property`).toString()); return {
        type:d, timeout:f, propCount:h, hasTransform:p
    }
}

function Fa(e, t) {
    for(; e.length<t.length; )e=e.concat(e); return Math.max(...t.map((n, r)=>Da(n)+Da(e[r])))
}

function Da(e) {
    return e==="auto" ?0:Number(e.slice(0, -1).replace(",", "."))*1e3
}

function Gd() {
    return document.body.offsetHeight
}

function wm(e, t, n) {
    const r=e[Qr]; r&&(t=(t?[t, ...r]:[...r]).join(" ")), t==null?e.removeAttribute("class"):n?e.setAttribute("class", t):e.className=t
}

const wo=Symbol("_vod"), Kd=Symbol("_vsh"), wn= {
    beforeMount(e, {
        value:t
    }

    , {
    transition:n

}) {
    e[wo]=e.style.display==="none" ?"":e.style.display, n&&t?n.beforeEnter(e):ls(e, t)
}

, mounted(e, {
    value:t
}

, {
transition:n

}) {
    n&&t&&n.enter(e)
}

, updated(e, {
    value:t, oldValue:n
}

, {
transition:r

}) {
    !t != !n&&(r?t?(r.beforeEnter(e), ls(e, !0), r.enter(e)):r.leave(e, ()=> {
                ls(e, !1)
            }):ls(e, t))
}

, beforeUnmount(e, {
    value:t

}) {
    ls(e, t)
}
}

; function ls(e, t) {
    e.style.display=t?e[wo]:"none", e[Kd]= !t
}

const Em=Symbol(""), Sm=/(^|; )\s*display\s*:/; function xm(e, t, n) {
    const r=e.style, s=Ve(n); let o= !1; if(n&& !s) {
        if(t)if(Ve(t))for(const i of t.split(";")) {
            const l=i.slice(0, i.indexOf(":")).trim(); n[l]==null&&co(r, l, "")
        }

        else for(const i in t)n[i]==null&&co(r, i, ""); for(const i in n)i==="display" &&(o= !0), co(r, i, n[i])
    }

    else if(s) {
        if(t !==n) {
            const i=r[Em]; i&&(n+=";" +i), r.cssText=n, o=Sm.test(n)
        }
    }

    else t&&e.removeAttribute("style"); wo in e&&(e[wo]=o?r.display:"", e[Kd]&&(r.display="none"))
}

const $a=/\s* !important$/; function co(e, t, n) {
    if(se(n))n.forEach(r=>co(e, t, r)); else if(n==null&&(n=""), t.startsWith ("--"))e.setProperty(t, n); else {
        const r=Cm(e, t); $a.test(n)?e.setProperty(wr(r), n.replace($a, ""), "important"):e[r]=n
    }
}

const ja=["Webkit", "Moz", "ms"], ui= {}

; function Cm(e, t) {
    const n=ui[t]; if(n)return n; let r=jt(t); if(r !=="filter" &&r in e)return ui[t]=r; r=ko(r); for(let s=0; s<ja.length; s++) {
        const o=ja[s]+r; if(o in e)return ui[t]=o
    }

    return t
}

const Ha="http://www.w3.org/1999/xlink"; function Ua(e, t, n, r, s, o=Oh(t)) {
    r&&t.startsWith ("xlink:")?n==null?e.removeAttributeNS(Ha, t.slice(6, t.length)):e.setAttributeNS(Ha, t, n):n==null||o&& !Pu(n)?e.removeAttribute(t):e.setAttribute(t, o?"":Kn(n)?String(n):n)
}

function Ba(e, t, n, r) {
    if(t==="innerHTML" ||t==="textContent") {
        n !=null&&(e[t]=t==="innerHTML" ?Ud(n):n); return
    }

    const s=e.tagName; if(t==="value" &&s !=="PROGRESS" && !s.includes("-")) {
        const i=s==="OPTION" ?e.getAttribute("value")||"":e.value, l=n==null?e.type==="checkbox" ?"on":"":String(n); (i !==l|| !("_value" in e))&&(e.value=l), n==null&&e.removeAttribute(t), e._value=n; return
    }

    let o= !1; if(n==="" ||n==null) {
        const i=typeof e[t]; i==="boolean" ?n=Pu(n):n==null&&i==="string" ?(n="", o= !0):i==="number" &&(n=0, o= !0)
    }

    try {
        e[t]=n
    }

    catch {}

    o&&e.removeAttribute(t)
}

function Cr(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function Lm(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

const Va=Symbol("_vei"); function Tm(e, t, n, r, s=null) {
    const o=e[Va]||(e[Va]= {}), i=o[t]; if(r&&i)i.value=r; else {
        const[l, a]=Om(t); if(r) {
            const u=o[t]=Im(r, s); Cr(e, l, u, a)
        }

        else i&&(Lm(e, l, i, a), o[t]=void 0)
    }
}

const za=/(?:Once|Passive|Capture)$/; function Om(e) {
    let t; if(za.test(e)) {
        t= {}

        ; let r; for(; r=e.match(za); )e=e.slice(0, e.length-r[0].length), t[r[0].toLowerCase()]= !0
    }

    return[e[2]===":" ?e.slice(3):wr(e.slice(2)), t]
}

let di=0; const Am=Promise.resolve(), Rm=()=>di||(Am.then(()=>di=0), di=Date.now()); function Im(e, t) {
    const n=r=> {
        if( !r._vts)r._vts=Date.now(); else if(r._vts<=n.attached)return; Wt(km(r, n.value), t, 5, [r])
    }

    ; return n.value=e, n.attached=Rm(), n
}

function km(e, t) {
    if(se(t)) {
        const n=e.stopImmediatePropagation; return e.stopImmediatePropagation=()=> {
            n.call(e), e._stopped= !0
        }

        , t.map(r=>s=> !s._stopped&&r&&r(s))
    }

    else return t
}

const Wa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123, Mm=(e, t, n, r, s, o)=> {
    const i=s==="svg"; t==="class" ?wm(e, r, i):t==="style" ?xm(e, n, r):Ao(t)?El(t)||Tm(e, t, n, r, o):(t[0]==="." ?(t=t.slice(1), !0):t[0]==="^" ?(t=t.slice(1), !1):Pm(e, t, r, i))?(Ba(e, t, r), !e.tagName.includes("-")&&(t==="value" ||t==="checked" ||t==="selected")&&Ua(e, t, r, i, o, t !=="value")):e._isVueCE&&(/[A-Z]/.test(t)|| !Ve(r))?Ba(e, jt(t), r):(t==="true-value" ?e._trueValue=r:t==="false-value" &&(e._falseValue=r), Ua(e, t, r, i))
}

; function Pm(e, t, n, r) {
    if(r)return ! !(t==="innerHTML" ||t==="textContent" ||t in e&&Wa(t)&&ie(n)); if(t==="spellcheck" ||t==="draggable" ||t==="translate" ||t==="form" ||t==="list" &&e.tagName==="INPUT" ||t==="type" &&e.tagName==="TEXTAREA")return !1; if(t==="width" ||t==="height") {
        const s=e.tagName; if(s==="IMG" ||s==="VIDEO" ||s==="CANVAS" ||s==="SOURCE")return !1
    }

    return Wa(t)&&Ve(n)? !1:t in e
}

const qd=new WeakMap, Qd=new WeakMap, Eo=Symbol("_moveCb"), Ga=Symbol("_enterCb"), Nm=e=>(delete e.props.mode, e), Fm=Nm({
    name:"TransitionGroup", props:Ge({}

    , Vd, {
    tag:String, moveClass:String

}), setup(e, {
    slots:t

}) {
    const n=En(), r=ud(); let s, o; return bd(()=> {
            if( !s.length)return; const i=e.moveClass||`$ {
                e.name||"v"
            }

            -move`; if( !Hm(s[0].el, n.vnode.el, i))return; s.forEach(Dm), s.forEach($m); const l=s.filter(jm); Gd(), l.forEach(a=> {
                    const u=a.el, d=u.style; fn(u, i), d.transform=d.webkitTransform=d.transitionDuration=""; const f=u[Eo]=h=> {
                        h&&h.target !==u||( !h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend", f), u[Eo]=null, In(u, i))
                    }

                    ; u.addEventListener("transitionend", f)
                })

        }), ()=> {
        const i=Ee(e), l=zd(i); let a=i.tag||we; if(s=[], o)for(let u=0; u<o.length; u++) {
            const d=o[u]; d.el&&d.el instanceof Element&&(s.push(d), _r(d, xs(d, l, r, n)), qd.set(d, d.el.getBoundingClientRect()))
        }

        o=t.default?Fl(t.default()):[]; for(let u=0; u<o.length; u++) {
            const d=o[u]; d.key !=null&&_r(d, xs(d, l, r, n))
        }

        return B(a, null, o)
    }
}

}), So=Fm; function Dm(e) {
    const t=e.el; t[Eo]&&t[Eo](), t[Ga]&&t[Ga]()
}

function $m(e) {
    Qd.set(e, e.el.getBoundingClientRect())
}

function jm(e) {
    const t=qd.get(e), n=Qd.get(e), r=t.left-n.left, s=t.top-n.top; if(r||s) {
        const o=e.el.style; return o.transform=o.webkitTransform=`translate($ {
                r
            }

            px, $ {
                s
            }

            px)`, o.transitionDuration="0s", e
    }
}

function Hm(e, t, n) {
    const r=e.cloneNode(), s=e[Qr]; s&&s.forEach(l=> {
            l.split(/\s+/).forEach(a=>a&&r.classList.remove(a))

        }), n.split(/\s+/).forEach(l=>l&&r.classList.add(l)), r.style.display="none"; const o=t.nodeType===1?t:t.parentNode; o.appendChild(r); const {
        hasTransform:i
    }

    =Wd(r); return o.removeChild(r), i
}

const Ka=e=> {
    const t=e.props["onUpdate:modelValue"]|| !1; return se(t)?n=>oo(t, n):t
}

; function Um(e) {
    e.target.composing= !0
}

function qa(e) {
    const t=e.target; t.composing&&(t.composing= !1, t.dispatchEvent(new Event("input")))
}

const fi=Symbol("_assign"), Mi= {
    created(e, {
        modifiers: {
            lazy:t, trim:n, number:r
        }
    }

    , s) {
    e[fi]=Ka(s); const o=r||s.props&&s.props.type==="number"; Cr(e, t?"change":"input", i=> {
            if(i.target.composing)return; let l=e.value; n&&(l=l.trim()), o&&(l=Si(l)), e[fi](l)

        }), n&&Cr(e, "change", ()=> {
            e.value=e.value.trim()
        }), t||(Cr(e, "compositionstart", Um), Cr(e, "compositionend", qa), Cr(e, "change", qa))
}

, mounted(e, {
    value:t

}) {
    e.value=t??""
}

, beforeUpdate(e, {
    value:t, oldValue:n, modifiers: {
        lazy:r, trim:s, number:o
    }
}

, i) {
    if(e[fi]=Ka(i), e.composing)return; const l=(o||e.type==="number")&& !/^0\d/.test(e.value)?Si(e.value):e.value, a=t??""; l !==a&&(document.activeElement===e&&e.type !=="range" &&(r&&t===n||s&&e.value.trim()===a)||(e.value=a))
}
}

, Bm=["ctrl", "shift", "alt", "meta"], Vm= {
    stop:e=>e.stopPropagation(), prevent:e=>e.preventDefault(), self:e=>e.target !==e.currentTarget, ctrl:e=> !e.ctrlKey, shift:e=> !e.shiftKey, alt:e=> !e.altKey, meta:e=> !e.metaKey, left:e=>"button" in e&&e.button !==0, middle:e=>"button" in e&&e.button !==1, right:e=>"button" in e&&e.button !==2, exact:(e, t)=>Bm.some(n=>e[`$ {
            n
        }

        Key`]&& !t.includes(n))
}

, zm=(e, t)=> {
    const n=e._withMods||(e._withMods= {}), r=t.join("."); return n[r]||(n[r]=(s, ...o)=> {
            for(let i=0; i<t.length; i++) {
                const l=Vm[t[i]]; if(l&&l(s, t))return
            }

            return e(s, ...o)
        })
}

, Wm=Ge({
    patchProp:Mm
}

, bm); let Qa; function Gm() {
    return Qa||(Qa=Up(Wm))
}

const Km=(...e)=> {
    const t=Gm().createApp(...e), {
    mount:n
}

=t; return t.mount=r=> {
    const s=Qm(r); if( !s)return; const o=t._component; !ie(o)&& !o.render&& !o.template&&(o.template=s.innerHTML), s.nodeType===1&&(s.textContent=""); const i=n(s, !1, qm(s)); return s instanceof Element&&(s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
}

, t
}

; function qm(e) {
    if(e instanceof SVGElement)return"svg"; if(typeof MathMLElement=="function" &&e instanceof MathMLElement)return"mathml"
}

function Qm(e) {
    return Ve(e)?document.querySelector(e):e
}

const dt=(e, t)=> {
    const n=e.__vccOpts||e; for(const[r, s]of t)n[r]=s; return n
}

, Jm= {}

; function Ym(e, t) {
    const n=Kt("router-view"); return J(), Wn(n)
}

const Zm=dt(Jm, [["render", Ym]]);

/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Lr=typeof document<"u"; function Jd(e) {
    return typeof e=="object" ||"displayName" in e||"props" in e||"__vccOpts" in e
}

function Xm(e) {
    return e.__esModule||e[Symbol.toStringTag]==="Module" ||e.default&&Jd(e.default)
}

const Ae=Object.assign; function hi(e, t) {
    const n= {}

    ; for(const r in t) {
        const s=t[r]; n[r]=Gt(s)?s.map(e):e(s)
    }

    return n
}

const _s=()=> {}

, Gt=Array.isArray, Yd=/#/g, e1=/&/g, t1=/\//g, n1=/=/g, r1=/\?/g, Zd=/\+/g, s1=/%5B/g, o1=/%5D/g, Xd=/%5E/g, i1=/%60/g, ef=/%7B/g, l1=/%7C/g, tf=/%7D/g, a1=/%20/g; function Ul(e) {
    return encodeURI("" +e).replace(l1, "|").replace(s1, "[").replace(o1, "]")
}

function c1(e) {
    return Ul(e).replace(ef, "{").replace(tf, "}").replace(Xd, "^")
}

function Pi(e) {
    return Ul(e).replace(Zd, "%2B").replace(a1, "+").replace(Yd, "%23").replace(e1, "%26").replace(i1, "`").replace(ef, "{").replace(tf, "}").replace(Xd, "^")
}

function u1(e) {
    return Pi(e).replace(n1, "%3D")
}

function d1(e) {
    return Ul(e).replace(Yd, "%23").replace(r1, "%3F")
}

function f1(e) {
    return e==null?"":d1(e).replace(t1, "%2F")
}

function Ts(e) {
    try {
        return decodeURIComponent("" +e)
    }

    catch {}

    return"" +e
}

const h1=/\/$/, p1=e=>e.replace(h1, ""); function pi(e, t, n="/") {
    let r, s= {}

    , o="", i=""; const l=t.indexOf("#"); let a=t.indexOf("?"); return l<a&&l>=0&&(a=-1), a>-1&&(r=t.slice(0, a), o=t.slice(a+1, l>-1?l:t.length), s=e(o)), l>-1&&(r=r||t.slice(0, l), i=t.slice(l, t.length)), r=_1(r??t, n), {
    fullPath:r+(o&&"?")+o+i, path:r, query:s, hash:Ts(i)
}
}

function m1(e, t) {
    const n=t.query?e(t.query):""; return t.path+(n&&"?")+n+(t.hash||"")
}

function Ja(e, t) {
    return !t|| !e.toLowerCase().startsWith (t.toLowerCase())?e:e.slice(t.length)||"/"
}

function g1(e, t, n) {
    const r=t.matched.length-1, s=n.matched.length-1; return r>-1&&r===s&&Jr(t.matched[r], n.matched[s])&&nf(t.params, n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash
}

function Jr(e, t) {
    return(e.aliasOf||e)===(t.aliasOf||t)
}

function nf(e, t) {
    if(Object.keys(e).length !==Object.keys(t).length)return !1; for(const n in e)if( !b1(e[n], t[n]))return !1; return !0
}

function b1(e, t) {
    return Gt(e)?Ya(e, t):Gt(t)?Ya(t, e):e===t
}

function Ya(e, t) {
    return Gt(t)?e.length===t.length&&e.every((n, r)=>n===t[r]):e.length===1&&e[0]===t
}

function _1(e, t) {
    if(e.startsWith ("/"))return e; if( !e)return t; const n=t.split("/"), r=e.split("/"), s=r[r.length-1]; (s===".." ||s===".")&&r.push(""); let o=n.length-1, i, l; for(i=0; i<r.length; i++)if(l=r[i], l !==".")if(l==="..")o>1&&o--; else break; return n.slice(0, o).join("/")+"/" +r.slice(i).join("/")
}

const On= {
    path:"/", name:void 0, params: {}

    , query: {}

    , hash:"", fullPath:"/", matched:[], meta: {}

    , redirectedFrom:void 0
}

; var Os; (function(e) {
        e.pop="pop", e.push="push"

    })(Os||(Os= {})); var vs; (function(e) {
        e.back="back", e.forward="forward", e.unknown=""

    })(vs||(vs= {})); function v1(e) {
    if( !e)if(Lr) {
        const t=document.querySelector("base"); e=t&&t.getAttribute("href")||"/", e=e.replace(/^\w+:\/\/[^\/]+/, "")
    }

    else e="/"; return e[0] !=="/" &&e[0] !=="#" &&(e="/" +e), p1(e)
}

const y1=/^[^#]+#/; function w1(e, t) {
    return e.replace(y1, "#")+t
}

function E1(e, t) {
    const n=document.documentElement.getBoundingClientRect(), r=e.getBoundingClientRect(); return {
        behavior:t.behavior, left:r.left-n.left-(t.left||0), top:r.top-n.top-(t.top||0)
    }
}

const Bo=()=>({
    left:window.scrollX, top:window.scrollY

}); function S1(e) {
    let t; if("el" in e) {
        const n=e.el, r=typeof n=="string" &&n.startsWith ("#"), s=typeof n=="string" ?r?document.getElementById(n.slice(1)):document.querySelector(n):n; if( !s)return; t=E1(s, e)
    }

    else t=e; "scrollBehavior" in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left !=null?t.left:window.scrollX, t.top !=null?t.top:window.scrollY)
}

function Za(e, t) {
    return(history.state?history.state.position-t:-1)+e
}

const Ni=new Map; function x1(e, t) {
    Ni.set(e, t)
}

function C1(e) {
    const t=Ni.get(e); return Ni.delete(e), t
}

let L1=()=>location.protocol+"//" +location.host; function rf(e, t) {
    const {
        pathname:n, search:r, hash:s
    }

    =t, o=e.indexOf("#"); if(o>-1) {
        let l=s.includes(e.slice(o))?e.slice(o).length:1, a=s.slice(l); return a[0] !=="/" &&(a="/" +a), Ja(a, "")
    }

    return Ja(n, e)+r+s
}

function T1(e, t, n, r) {
    let s=[], o=[], i=null; const l=({
        state:h

    })=> {
    const p=rf(e, location), y=n.value, w=t.value; let E=0; if(h) {
        if(n.value=p, t.value=h, i&&i===y) {
            i=null; return
        }

        E=w?h.position-w.position:0
    }

    else r(p); s.forEach(b=> {
            b(n.value, y, {
                delta:E, type:Os.pop, direction:E?E>0?vs.forward:vs.back:vs.unknown
            })
    })
}

; function a() {
    i=n.value
}

function u(h) {
    s.push(h); const p=()=> {
        const y=s.indexOf(h); y>-1&&s.splice(y, 1)
    }

    ; return o.push(p), p
}

function d() {
    const {
        history:h
    }

    =window; h.state&&h.replaceState(Ae({}

        , h.state, {
        scroll:Bo()
    }), "")
}

function f() {
    for(const h of o)h(); o=[], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", d)
}

return window.addEventListener("popstate", l), window.addEventListener("beforeunload", d, {
    passive: !0

}), {
pauseListeners:a, listen:u, destroy:f
}
}

function Xa(e, t, n, r= !1, s= !1) {
    return {
        back:e, current:t, forward:n, replaced:r, position:window.history.length, scroll:s?Bo():null
    }
}

function O1(e) {
    const {
        history:t, location:n
    }

    =window, r= {
        value:rf(e, n)
    }

    , s= {
        value:t.state
    }

    ; s.value||o(r.value, {
        back:null, current:r.value, forward:null, position:t.length-1, replaced: !0, scroll:null
    }

    , !0); function o(a, u, d) {
    const f=e.indexOf("#"), h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:L1()+e+a; try {
        t[d?"replaceState":"pushState"](u, "", h), s.value=u
    }

    catch(p) {
        console.error(p), n[d?"replace":"assign"](h)
    }
}

function i(a, u) {
    const d=Ae({}

    , t.state, Xa(s.value.back, a, s.value.forward, !0), u, {
    position:s.value.position
}); o(a, d, !0), r.value=a
}

function l(a, u) {
    const d=Ae({}

    , s.value, t.state, {
    forward:a, scroll:Bo()

}); o(d.current, d, !0); const f=Ae({}

, Xa(r.value, a, null), {
position:d.position+1
}

, u); o(a, f, !1), r.value=a
}

return {
    location:r, state:s, push:l, replace:i
}
}

function A1(e) {
    e=v1(e); const t=O1(e), n=T1(e, t.state, t.location, t.replace); function r(o, i= !0) {
        i||n.pauseListeners(), history.go(o)
    }

    const s=Ae({
        location:"", base:e, go:r, createHref:w1.bind(null, e)
    }

    , t, n); return Object.defineProperty(s, "location", {
    enumerable: !0, get:()=>t.location.value

}), Object.defineProperty(s, "state", {
    enumerable: !0, get:()=>t.state.value
}), s
}

function R1(e) {
    return typeof e=="string" ||e&&typeof e=="object"
}

function sf(e) {
    return typeof e=="string" ||typeof e=="symbol"
}

const of=Symbol(""); var ec; (function(e) {
        e[e.aborted=4]="aborted", e[e.cancelled=8]="cancelled", e[e.duplicated=16]="duplicated"

    })(ec||(ec= {})); function Yr(e, t) {
    return Ae(new Error, {
        type:e, [of]: !0
    }

    , t)
}

function un(e, t) {
    return e instanceof Error&&of in e&&(t==null|| ! !(e.type&t))
}

const tc="[^/]+?", I1= {
    sensitive: !1, strict: !1, start: !0, end: !0
}

, k1=/[.+*?^$ {}

()[\]/\\]/g; function M1(e, t) {
    const n=Ae({}

    , I1, t), r=[]; let s=n.start?"^":""; const o=[]; for(const u of e) {
    const d=u.length?[]:[90]; n.strict&& !u.length&&(s+="/"); for(let f=0; f<u.length; f++) {
        const h=u[f]; let p=40+(n.sensitive?.25:0); if(h.type===0)f||(s+="/"), s+=h.value.replace(k1, "\\$&"), p+=40; else if(h.type===1) {
            const {
                value:y, repeatable:w, optional:E, regexp:b
            }

            =h; o.push({
                name:y, repeatable:w, optional:E

            }); const S=b||tc; if(S !==tc) {
            p+=10; try {
                new RegExp(`($ {
                            S
                        })`)
            }

            catch(x) {
                throw new Error(`Invalid custom RegExp for param "${y}"($ {
                            S
                        }): `+x.message)
            }
        }

        let L=w?`((?:$ {
                    S

                })(?:/(?:$ {
                        S

                    }))*)`:`($ {
                S

            })`; f||(L=E&&u.length<2?`(?:/$ {
                    L
                })`:"/" +L), E&&(L+="?"), s+=L, p+=20, E&&(p+=-8), w&&(p+=-20), S===".*" &&(p+=-50)
    }

    d.push(p)
}

r.push(d)
}

if(n.strict&&n.end) {
    const u=r.length-1; r[u][r[u].length-1]+=.7000000000000001
}

n.strict||(s+="/?"), n.end?s+="$":n.strict&&(s+="(?:/|$)"); const i=new RegExp(s, n.sensitive?"":"i"); function l(u) {
    const d=u.match(i), f= {}

    ; if( !d)return null; for(let h=1; h<d.length; h++) {
        const p=d[h]||"", y=o[h-1]; f[y.name]=p&&y.repeatable?p.split("/"):p
    }

    return f
}

function a(u) {
    let d="", f= !1; for(const h of e) {
        ( !f|| !d.endsWith ("/"))&&(d+="/"), f= !1; for(const p of h)if(p.type===0)d+=p.value; else if(p.type===1) {
            const {
                value:y, repeatable:w, optional:E
            }

            =p, b=y in u?u[y]:""; if(Gt(b)&& !w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`); const S=Gt(b)?b.join("/"):b; if( !S)if(E)h.length<2&&(d.endsWith ("/")?d=d.slice(0, -1):f= !0); else throw new Error(`Missing required param "${y}" `); d+=S
        }
    }

    return d||"/"
}

return {
    re:i, score:r, keys:o, parse:l, stringify:a
}
}

function P1(e, t) {
    let n=0; for(; n<e.length&&n<t.length; ) {
        const r=t[n]-e[n]; if(r)return r; n++
    }

    return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0
}

function lf(e, t) {
    let n=0; const r=e.score, s=t.score; for(; n<r.length&&n<s.length; ) {
        const o=P1(r[n], s[n]); if(o)return o; n++
    }

    if(Math.abs(s.length-r.length)===1) {
        if(nc(r))return 1; if(nc(s))return-1
    }

    return s.length-r.length
}

function nc(e) {
    const t=e[e.length-1]; return e.length>0&&t[t.length-1]<0
}

const N1= {
    type:0, value:""
}

, F1=/[a-zA-Z0-9_]/; function D1(e) {
    if( !e)return[[]]; if(e==="/")return[[N1]]; if( !e.startsWith ("/"))throw new Error(`Invalid path "${e}" `); function t(p) {
        throw new Error(`ERR ($ {
                    n

                })/"${u}": $ {
                p
            }

            `)
    }

    let n=0, r=n; const s=[]; let o; function i() {
        o&&s.push(o), o=[]
    }

    let l=0, a, u="", d=""; function f() {
        u&&(n===0?o.push({
                type:0, value:u

            }):n===1||n===2||n===3?(o.length>1&&(a==="*" ||a==="+")&&t(`A repeatable param ($ {
                        u
                    }) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&f(),i()):a===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:F1.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),s}function $1(e,t,n){const r=M1(D1(e.path),n),s=Ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function j1(e,t){const n=[],r=new Map;t=ic({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function o(f,h,p){const y=!p,w=sc(f);w.aliasOf=p&&p.record;const E=ic(t,f),b=[w];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of x)b.push(sc(Ae({},w,{components:p?p.record.components:w.components,path:M,aliasOf:p?p.record:w})))}let S,L;for(const x of b){const{path:M}=x;if(h&&M[0]!=="/"){const $=h.record.path,R=$[$.length-1]==="/"?"":"/";x.path=h.record.path+(M&&R+M)}if(S=$1(x,h,E),p?p.alias.push(S):(L=L||S,L!==S&&L.alias.push(S),y&&f.name&&!oc(S)&&i(f.name)),af(S)&&a(S),w.children){const $=w.children;for(let R=0;R<$.length;R++)o($[R],S,p&&p.children[R])}p=p||S}return L?()=>{i(L)}:_s}function i(f){if(sf(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function l(){return n}function a(f){const h=B1(f,n);n.splice(h,0,f),f.record.name&&!oc(f)&&r.set(f.record.name,f)}function u(f,h){let p,y={},w,E;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Yr(1,{location:f});E=p.record.name,y=Ae(rc(h.params,p.keys.filter(L=>!L.optional).concat(p.parent?p.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&rc(f.params,p.keys.map(L=>L.name))),w=p.stringify(y)}else if(f.path!=null)w=f.path,p=n.find(L=>L.re.test(w)),p&&(y=p.parse(w),E=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw Yr(1,{location:f,currentLocation:h});E=p.record.name,y=Ae({},h.params,f.params),w=p.stringify(y)}const b=[];let S=p;for(;S;)b.unshift(S.record),S=S.parent;return{name:E,path:w,params:y,matched:b,meta:U1(b)}}e.forEach(f=>o(f));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function rc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function sc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:H1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function H1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function U1(e){return e.reduce((t,n)=>Ae(t,n.meta),{})}function ic(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function B1(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;lf(e,t[o])<0?r=o:n=o+1}const s=V1(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function V1(e){let t=e;for(;t=t.parent;)if(af(t)&&lf(e,t)===0)return t}function af({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function z1(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Zd," "),i=o.indexOf("="),l=Ts(i<0?o:o.slice(0,i)),a=i<0?null:Ts(o.slice(i+1));if(l in t){let u=t[l];Gt(u)||(u=t[l]=[u]),u.push(a)}else t[l]=a}return t}function lc(e){let t="";for(let n in e){const r=e[n];if(n=u1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Gt(r)?r.map(o=>o&&Pi(o)):[r&&Pi(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function W1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const G1=Symbol(""),ac=Symbol(""),Bl=Symbol(""),cf=Symbol(""),Fi=Symbol("");function as(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Fn(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const u=h=>{h===!1?a(Yr(4,{from:n,to:t})):h instanceof Error?a(h):R1(h)?a(Yr(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),l())},d=o(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(d);e.length<3&&(f=f.then(u)),f.catch(h=>a(h))})}function mi(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Jd(a)){const d=(a.__vccOpts||a)[t];d&&o.push(Fn(d,n,r,i,l,s))}else{let u=a();o.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn' t resolve component "${l}" at "${i.path}" `); const f=Xm(d)?d.default:d; i.mods[l]=d, i.components[l]=f; const p=(f.__vccOpts||f)[t]; return p&&Fn(p, n, r, i, l, s)()
        }))
}
}

return o
}

function cc(e) {
    const t=$e(Bl), n=$e(cf), r=xe(()=> {
            const a=me(e.to); return t.resolve(a)

        }), s=xe(()=> {
            const {
                matched:a
            }

            =r.value, {
            length:u
        }

        =a, d=a[u-1], f=n.matched; if( !d|| !f.length)return-1; const h=f.findIndex(Jr.bind(null, d)); if(h>-1)return h; const p=uc(a[u-2]); return u>1&&uc(d)===p&&f[f.length-1].path !==p?f.findIndex(Jr.bind(null, a[u-2])):h

    }), o=xe(()=>s.value>-1&&J1(n.params, r.value.params)), i=xe(()=>s.value>-1&&s.value===n.matched.length-1&&nf(n.params, r.value.params)); function l(a= {}) {
    return Q1(a)?t[me(e.replace)?"replace":"push"](me(e.to)).catch(_s):Promise.resolve()
}

return {
    route:r, href:xe(()=>r.value.href), isActive:o, isExactActive:i, navigate:l
}
}

const K1=Jn({
    name:"RouterLink", compatConfig: {
        MODE:3
    }

    , props: {
        to: {
            type:[String, Object], required: !0
        }

        , replace:Boolean, activeClass:String, exactActiveClass:String, custom:Boolean, ariaCurrentValue: {
            type:String, default:"page"
        }
    }

    , useLink:cc, setup(e, {
        slots:t

    }) {
    const n=zt(cc(e)), {
    options:r
}

=$e(Bl), s=xe(()=>({
        [dc(e.activeClass, r.linkActiveClass, "router-link-active")]:n.isActive, [dc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]:n.isExactActive

    })); return()=> {
    const o=t.default&&t.default(n); return e.custom?o:Be("a", {
        "aria-current":n.isExactActive?e.ariaCurrentValue:null, href:n.href, onClick:n.navigate, class:s.value
    }

    , o)
}
}

}), q1=K1; function Q1(e) {
    if( !(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&& !e.defaultPrevented&& !(e.button !==void 0&&e.button !==0)) {
        if(e.currentTarget&&e.currentTarget.getAttribute) {
            const t=e.currentTarget.getAttribute("target"); if(/\b_blank\b/i.test(t))return
        }

        return e.preventDefault&&e.preventDefault(), !0
    }
}

function J1(e, t) {
    for(const n in t) {
        const r=t[n], s=e[n]; if(typeof r=="string") {
            if(r !==s)return !1
        }

        else if( !Gt(s)||s.length !==r.length||r.some((o, i)=>o !==s[i]))return !1
    }

    return !0
}

function uc(e) {
    return e?e.aliasOf?e.aliasOf.path:e.path:""
}

const dc=(e, t, n)=>e??t??n, Y1=Jn({
    name:"RouterView", inheritAttrs: !1, props: {
        name: {
            type:String, default:"default"
        }

        , route:Object
    }

    , compatConfig: {
        MODE:3
    }

    , setup(e, {
        attrs:t, slots:n

    }) {
    const r=$e(Fi), s=xe(()=>e.route||r.value), o=$e(ac, 0), i=xe(()=> {
            let u=me(o); const {
                matched:d
            }

            =s.value; let f; for(; (f=d[u])&& !f.components; )u++; return u

        }), l=xe(()=>s.value.matched[i.value]); At(ac, xe(()=>i.value+1)), At(G1, l), At(Fi, s); const a=ne(); return Ze(()=>[a.value, l.value, e.name], ([u, d, f], [h, p, y])=> {
            d&&(d.instances[f]=u, p&&p !==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards), d.updateGuards.size||(d.updateGuards=p.updateGuards))), u&&d&&( !p|| !Jr(d, p)|| !h)&&(d.enterCallbacks[f]||[]).forEach(w=>w(u))
        }

        , {
        flush:"post"

    }), ()=> {
    const u=s.value, d=e.name, f=l.value, h=f&&f.components[d]; if( !h)return fc(n.default, {
        Component:h, route:u

    }); const p=f.props[d], y=p?p=== !0?u.params:typeof p=="function" ?p(u):p:null, E=Be(h, Ae({}

    , y, t, {
    onVnodeUnmounted:b=> {
        b.component.isUnmounted&&(f.instances[d]=null)
    }

    , ref:a

})); return fc(n.default, {
    Component:E, route:u
})||E
}
}

}); function fc(e, t) {
    if( !e)return null; const n=e(t); return n.length===1?n[0]:n
}

const Z1=Y1; function X1(e) {
    const t=j1(e.routes, e), n=e.parseQuery||z1, r=e.stringifyQuery||lc, s=e.history, o=as(), i=as(), l=as(), a=td(On); let u=On; Lr&&e.scrollBehavior&&"scrollRestoration" in history&&(history.scrollRestoration="manual"); const d=hi.bind(null, H=>"" +H), f=hi.bind(null, f1), h=hi.bind(null, Ts); function p(H, K) {
        let W, Y; return sf(H)?(W=t.getRecordMatcher(H), Y=K):Y=H, t.addRoute(Y, W)
    }

    function y(H) {
        const K=t.getRecordMatcher(H); K&&t.removeRoute(K)
    }

    function w() {
        return t.getRoutes().map(H=>H.record)
    }

    function E(H) {
        return ! !t.getRecordMatcher(H)
    }

    function b(H, K) {
        if(K=Ae({}

            , K||a.value), typeof H=="string") {
        const g=pi(n, H, K.path), A=t.resolve({
            path:g.path
        }

        , K), D=s.createHref(g.fullPath); return Ae(g, A, {
        params:h(A.params), hash:Ts(g.hash), redirectedFrom:void 0, href:D
    })
}

let W; if(H.path !=null)W=Ae({}

, H, {
path:pi(n, H.path, K.path).path

}); else {
    const g=Ae({}

    , H.params); for(const A in g)g[A]==null&&delete g[A]; W=Ae({}

, H, {
params:f(g)
}), K.params=f(K.params)
}

const Y=t.resolve(W, K), pe=H.hash||""; Y.params=d(h(Y.params)); const Ce=m1(r, Ae({}

    , H, {
    hash:c1(pe), path:Y.path

})), _=s.createHref(Ce); return Ae({
    fullPath:Ce, hash:pe, query:r===lc?W1(H.query):H.query|| {}
}

, Y, {
redirectedFrom:void 0, href:_
})
}

function S(H) {
    return typeof H=="string" ?pi(n, H, a.value.path):Ae({}

    , H)
}

function L(H, K) {
    if(u !==H)return Yr(8, {
        from:K, to:H
    })
}

function x(H) {
    return R(H)
}

function M(H) {
    return x(Ae(S(H), {
            replace: !0
        }))
}

function $(H) {
    const K=H.matched[H.matched.length-1]; if(K&&K.redirect) {
        const {
            redirect:W
        }

        =K; let Y=typeof W=="function" ?W(H):W; return typeof Y=="string" &&(Y=Y.includes("?")||Y.includes("#")?Y=S(Y): {
                path:Y
            }

            , Y.params= {}), Ae({
            query:H.query, hash:H.hash, params:Y.path !=null? {}

            :H.params
        }

        , Y)
}
}

function R(H, K) {
    const W=u=b(H), Y=a.value, pe=H.state, Ce=H.force, _=H.replace=== !0, g=$(W); if(g)return R(Ae(S(g), {
            state:typeof g=="object" ?Ae({}

            , pe, g.state):pe, force:Ce, replace:_

    }), K||W); const A=W; A.redirectedFrom=K; let D; return !Ce&&g1(r, Y, W)&&(D=Yr(16, {
        to:A, from:Y

    }), tt(Y, Y, !0, !1)), (D?Promise.resolve(D):ee(A, Y)).catch(N=>un(N)?un(N, 2)?N:it(N):he(N, A, Y)).then(N=> {
        if(N) {
            if(un(N, 2))return R(Ae({
                    replace:_
                }

                , S(N.to), {
                state:typeof N.to=="object" ?Ae({}

                , pe, N.to.state):pe, force:Ce
        }), K||A)
}

else N=V(A, Y, !0, _, pe); return re(A, Y, N), N
})
}

function G(H, K) {
    const W=L(H, K); return W?Promise.reject(W):Promise.resolve()
}

function U(H) {
    const K=ft.values().next().value; return K&&typeof K.runWithContext=="function" ?K.runWithContext(H):H()
}

function ee(H, K) {
    let W; const[Y, pe, Ce]=eg(H, K); W=mi(Y.reverse(), "beforeRouteLeave", H, K); for(const g of Y)g.leaveGuards.forEach(A=> {
            W.push(Fn(A, H, K))

        }); const _=G.bind(null, H, K); return W.push(_), qe(W).then(()=> {
            W=[]; for(const g of o.list())W.push(Fn(g, H, K)); return W.push(_), qe(W)

        }).then(()=> {
            W=mi(pe, "beforeRouteUpdate", H, K); for(const g of pe)g.updateGuards.forEach(A=> {
                    W.push(Fn(A, H, K))
                }); return W.push(_), qe(W)

        }).then(()=> {
            W=[]; for(const g of Ce)if(g.beforeEnter)if(Gt(g.beforeEnter))for(const A of g.beforeEnter)W.push(Fn(A, H, K)); else W.push(Fn(g.beforeEnter, H, K)); return W.push(_), qe(W)

        }).then(()=>(H.matched.forEach(g=>g.enterCallbacks= {}), W=mi(Ce, "beforeRouteEnter", H, K, U), W.push(_), qe(W))).then(()=> {
            W=[]; for(const g of i.list())W.push(Fn(g, H, K)); return W.push(_), qe(W)
        }).catch(g=>un(g, 8)?g:Promise.reject(g))
}

function re(H, K, W) {
    l.list().forEach(Y=>U(()=>Y(H, K, W)))
}

function V(H, K, W, Y, pe) {
    const Ce=L(H, K); if(Ce)return Ce; const _=K===On, g=Lr?history.state: {}

    ; W&&(Y||_?s.replace(H.fullPath, Ae({
                scroll:_&&g&&g.scroll
            }

            , pe)):s.push(H.fullPath, pe)), a.value=H, tt(H, K, W, _), it()
}

let le; function Me() {
    le||(le=s.listen((H, K, W)=> {
                if( !Ht.listening)return; const Y=b(H), pe=$(Y); if(pe) {
                    R(Ae(pe, {
                            replace: !0
                        }), Y).catch(_s); return
            }

            u=Y; const Ce=a.value; Lr&&x1(Za(Ce.fullPath, W.delta), Bo()), ee(Y, Ce).catch(_=>un(_, 12)?_:un(_, 2)?(R(_.to, Y).then(g=> {
                            un(g, 20)&& !W.delta&&W.type===Os.pop&&s.go(-1, !1)

                        }).catch(_s), Promise.reject()):(W.delta&&s.go(-W.delta, !1), he(_, Y, Ce))).then(_=> {
                    _=_||V(Y, Ce, !1), _&&(W.delta&& !un(_, 8)?s.go(-W.delta, !1):W.type===Os.pop&&un(_, 20)&&s.go(-1, !1)), re(Y, Ce, _)
                }).catch(_s)
        }))
}

let ot=as(), Ie=as(), ge; function he(H, K, W) {
    it(H); const Y=Ie.list(); return Y.length?Y.forEach(pe=>pe(H, K, W)):console.error(H), Promise.reject(H)
}

function je() {
    return ge&&a.value !==On?Promise.resolve():new Promise((H, K)=> {
            ot.add([H, K])
        })
}

function it(H) {
    return ge||(ge= !H, Me(), ot.list().forEach(([K, W])=>H?W(H):K()), ot.reset()), H
}

function tt(H, K, W, Y) {
    const {
        scrollBehavior:pe
    }

    =e; if( !Lr|| !pe)return Promise.resolve(); const Ce= !W&&C1(Za(H.fullPath, 0))||(Y|| !W)&&history.state&&history.state.scroll||null; return Hs().then(()=>pe(H, K, Ce)).then(_=>_&&S1(_)).catch(_=>he(_, H, K))
}

const Pe=H=>s.go(H); let nt; const ft=new Set, Ht= {
    currentRoute:a, listening: !0, addRoute:p, removeRoute:y, clearRoutes:t.clearRoutes, hasRoute:E, getRoutes:w, resolve:b, options:e, push:x, replace:M, go:Pe, back:()=>Pe(-1), forward:()=>Pe(1), beforeEach:o.add, beforeResolve:i.add, afterEach:l.add, onError:Ie.add, isReady:je, install(H) {
        const K=this; H.component("RouterLink", q1), H.component("RouterView", Z1), H.config.globalProperties.$router=K, Object.defineProperty(H.config.globalProperties, "$route", {
            enumerable: !0, get:()=>me(a)

        }), Lr&& !nt&&a.value===On&&(nt= !0, x(s.location).catch(pe=> {})); const W= {}

    ; for(const pe in On)Object.defineProperty(W, pe, {
        get:()=>a.value[pe], enumerable: !0

    }); H.provide(Bl, K), H.provide(cf, Il(W)), H.provide(Fi, a); const Y=H.unmount; ft.add(H), H.unmount=function() {
    ft.delete(H), ft.size<1&&(u=On, le&&le(), le=null, a.value=On, nt= !1, ge= !1), Y()
}
}
}

; function qe(H) {
    return H.reduce((K, W)=>K.then(()=>U(W)), Promise.resolve())
}

return Ht
}

function eg(e, t) {
    const n=[], r=[], s=[], o=Math.max(t.matched.length, e.matched.length); for(let i=0; i<o; i++) {
        const l=t.matched[i]; l&&(e.matched.find(u=>Jr(u, l))?r.push(l):n.push(l)); const a=e.matched[i]; a&&(t.matched.find(u=>Jr(u, a))||s.push(a))
    }

    return[n, r, s]
}

const tg= {}

, ng= {
    class:"flex justify-center items-center flex-col w-full h-full min-h-screen bg-gray"
}

, rg= {
    class:"text-3xl font-extrabold text-center mb-12"
}

, sg= {
    class:"text-pretty w-1/2 text-center"
}

, og= {
    class:"flex flex-col justify-center items-center"
}

, ig= {
    class:"view-all text-xs mt-12"
}

; function lg(e, t) {
    return J(), X("div", ng, [c("h1", rg, F(e.$t("error.notFound")), 1), c("p", sg, F(e.$t("error.message")), 1), c("div", og, [c("div", ig, F(e.$t("error.continueShopping")), 1)])])
}

const ag=dt(tg, [["render", lg]]); function Vo(e) {
    return $u()?(ju(e), !0): !1
}

function ts(e) {
    return typeof e=="function" ?e():me(e)
}

const uf=typeof window<"u" &&typeof document<"u"; typeof WorkerGlobalScope<"u" &&globalThis instanceof WorkerGlobalScope; const cg=e=>e !=null, ug=Object.prototype.toString, dg=e=>ug.call(e)==="[object Object]", uo=()=> {}

, fg=hg(); function hg() {
    var e, t; return uf&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))
}

function pg(e) {
    return En()
}

function mg(e, t= !0, n) {
    pg()?Yn(e, n):t?e():Hs(e)
}

const Vs=uf?window:void 0; function on(e) {
    var t; const n=ts(e); return(t=n==null?void 0:n.$el) !=null?t:n
}

function ys(...e) {
    let t, n, r, s; if(typeof e[0]=="string" ||Array.isArray(e[0])?([n, r, s]=e, t=Vs):[t, n, r, s]=e, !t)return uo; Array.isArray(n)||(n=[n]), Array.isArray(r)||(r=[r]); const o=[], i=()=> {
        o.forEach(d=>d()), o.length=0
    }

    , l=(d, f, h, p)=>(d.addEventListener(f, h, p), ()=>d.removeEventListener(f, h, p)), a=Ze(()=>[on(t), ts(s)], ([d, f])=> {
            if(i(), !d)return; const h=dg(f)? {
                ...f
            }

            :f; o.push(...n.flatMap(p=>r.map(y=>l(d, p, y, h))))
        }

        , {
        immediate: !0, flush:"post"

    }), u=()=> {
    a(), i()
}

; return Vo(u), u
}

let hc= !1; function zo(e, t, n= {}) {
    const {
        window:r=Vs, ignore:s=[], capture:o= !0, detectIframe:i= !1
    }

    =n; if( !r)return uo; fg&& !hc&&(hc= !0, Array.from(r.document.body.children).forEach(p=>p.addEventListener("click", uo)), r.document.documentElement.addEventListener("click", uo)); let l= !0; const a=p=>ts(s).some(y=> {
            if(typeof y=="string")return Array.from(r.document.querySelectorAll(y)).some(w=>w===p.target||p.composedPath().includes(w)); {
                const w=on(y); return w&&(p.target===w||p.composedPath().includes(w))
            }

        }), u=p=> {
        const y=on(e); if( !( !y||y===p.target||p.composedPath().includes(y))) {
            if(p.detail===0&&(l= !a(p)), !l) {
                l= !0; return
            }

            t(p)
        }
    }

    ; let d= !1; const f=[ys(r, "click", p=> {
            d||(d= !0, setTimeout(()=> {
                        d= !1
                    }

                    , 0), u(p))
        }

        , {
        passive: !0, capture:o

    }), ys(r, "pointerdown", p=> {
        const y=on(e); l= !a(p)&& ! !(y&& !p.composedPath().includes(y))
    }

    , {
    passive: !0

}), i&&ys(r, "blur", p=> {
        setTimeout(()=> {
                var y; const w=on(e); ((y=r.document.activeElement)==null?void 0:y.tagName)==="IFRAME" && !(w !=null&&w.contains(r.document.activeElement))&&t(p)
            }

            , 0)
    })].filter(Boolean); return()=>f.forEach(p=>p())
}

function gg() {
    const e=ne( !1), t=En(); return t&&Yn(()=> {
            e.value= !0
        }

        , t), e
}

function Vl(e) {
    const t=gg(); return xe(()=>(t.value, ! !e()))
}

function bg(e, t, n= {}) {
    const {
        window:r=Vs, ...s
    }

    =n; let o; const i=Vl(()=>r&&"MutationObserver" in r), l=()=> {
        o&&(o.disconnect(), o=void 0)
    }

    , a=xe(()=> {
            const h=ts(e), p=(Array.isArray(h)?h:[h]).map(on).filter(cg); return new Set(p)

        }), u=Ze(()=>a.value, h=> {
            l(), i.value&&h.size&&(o=new MutationObserver(t), h.forEach(p=>o.observe(p, s)))
        }

        , {
        immediate: !0, flush:"post"

    }), d=()=>o==null?void 0:o.takeRecords(), f=()=> {
    u(), l()
}

; return Vo(f), {
isSupported:i, stop:f, takeRecords:d
}
}

function df(e, t= {}) {
    const {
        window:n=Vs
    }

    =t, r=Vl(()=>n&&"matchMedia" in n&&typeof n.matchMedia=="function"); let s; const o=ne( !1), i=u=> {
        o.value=u.matches
    }

    , l=()=> {
        s&&("removeEventListener" in s?s.removeEventListener("change", i):s.removeListener(i))
    }

    , a=Kp(()=> {
            r.value&&(l(), s=n.matchMedia(ts(e)), "addEventListener" in s?s.addEventListener("change", i):s.addListener(i), o.value=s.matches)

        }); return Vo(()=> {
            a(), l(), s=void 0
        }), o
}

function _g(e, t, n= {}) {
    const {
        window:r=Vs, ...s
    }

    =n; let o; const i=Vl(()=>r&&"ResizeObserver" in r), l=()=> {
        o&&(o.disconnect(), o=void 0)
    }

    , a=xe(()=> {
            const f=ts(e); return Array.isArray(f)?f.map(h=>on(h)):[on(f)]

        }), u=Ze(a, f=> {
            if(l(), i.value&&r) {
                o=new ResizeObserver(t); for(const h of f)h&&o.observe(h, s)
            }
        }

        , {
        immediate: !0, flush:"post"

    }), d=()=> {
    l(), u()
}

; return Vo(d), {
isSupported:i, stop:d
}
}

function vg(e, t= {}) {
    const {
        reset:n= !0, windowResize:r= !0, windowScroll:s= !0, immediate:o= !0, updateTiming:i="sync"
    }

    =t, l=ne(0), a=ne(0), u=ne(0), d=ne(0), f=ne(0), h=ne(0), p=ne(0), y=ne(0); function w() {
        const b=on(e); if( !b) {
            n&&(l.value=0, a.value=0, u.value=0, d.value=0, f.value=0, h.value=0, p.value=0, y.value=0); return
        }

        const S=b.getBoundingClientRect(); l.value=S.height, a.value=S.bottom, u.value=S.left, d.value=S.right, f.value=S.top, h.value=S.width, p.value=S.x, y.value=S.y
    }

    function E() {
        i==="sync" ?w():i==="next-frame" &&requestAnimationFrame(()=>w())
    }

    return _g(e, E), Ze(()=>on(e), b=> !b&&E()), bg(e, E, {
        attributeFilter:["style", "class"]

    }), s&&ys("scroll", E, {
    capture: !0, passive: !0

}), r&&ys("resize", E, {
    passive: !0

}), mg(()=> {
        o&&E()

    }), {
height:l, bottom:a, left:u, right:d, top:f, width:h, x:p, y, update:E
}
}

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yg=e=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var to= {
    xmlns:"http://www.w3.org/2000/svg", width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", "stroke-width":2, "stroke-linecap":"round", "stroke-linejoin":"round"
}

;

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wg=({
    size:e, strokeWidth:t=2, absoluteStrokeWidth:n, color:r, iconNode:s, name:o, class:i, ...l
}

, {
slots:a

})=>Be("svg", {
    ...to, width:e||to.width, height:e||to.height, stroke:r||to.stroke, "stroke-width":n?Number(t)*24/Number(e):t, class:["lucide", `lucide-$ {
        yg(o??"icon")
    }

    `], ...l
}

, [...s.map(u=>Be(...u)), ...a.default?[a.default()]:[]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn=(e, t)=>(n, {
    slots:r

})=>Be(wg, {
    ...n, iconNode:t, name:e
}

, r);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di=xn("ChevronLeftIcon", [["path", {
    d:"m15 18-6-6 6-6", key:"1wnfg3"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i=xn("ChevronRightIcon", [["path", {
    d:"m9 18 6-6-6-6", key:"mthhwq"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg=xn("CircleCheckBigIcon", [["path", {
    d:"M21.801 10A10 10 0 1 1 17 3.335", key:"yps3ct"
}

], ["path", {
d:"m9 11 3 3L22 4", key:"1pflzl"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg=xn("CircleIcon", [["circle", {
    cx:"12", cy:"12", r:"10", key:"1mglay"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff=xn("InfoIcon", [["circle", {
    cx:"12", cy:"12", r:"10", key:"1mglay"
}

], ["path", {
d:"M12 16v-4", key:"1dtifu"
}

], ["path", {
d:"M12 8h.01", key:"e9boi3"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc=xn("LockKeyholeIcon", [["circle", {
    cx:"12", cy:"16", r:"1", key:"1au0dj"
}

], ["rect", {
x:"3", y:"10", width:"18", height:"12", rx:"2", key:"6s8ecr"
}

], ["path", {
d:"M7 10V7a5 5 0 0 1 10 0v3", key:"1pqi11"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg=xn("PackageIcon", [["path", {
    d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key:"1a0edw"
}

], ["path", {
d:"M12 22V12", key:"d0xqtd"
}

], ["path", {
d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key:"yx3hmr"
}

], ["path", {
d:"m7.5 4.27 9 5.15", key:"1c824w"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg=xn("SearchIcon", [["circle", {
    cx:"11", cy:"11", r:"8", key:"4ej97u"
}

], ["path", {
d:"m21 21-4.3-4.3", key:"1qie3q"
}

]]);

/**
 * @license lucide-vue-next v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf=xn("XIcon", [["path", {
    d:"M18 6 6 18", key:"1bl5f8"
}

], ["path", {
d:"m6 6 12 12", key:"d8bk6v"
}

]]), Lg= {
    class:"flex items-center gap-4"
}

, Tg= {
    class:"flex flex-col items-start gap-2 text-xs"
}

, Og= {
    class:"opacity-55"
}

, Ag= {
    key:0, class:"underline"
}

, Rg= {
    class:"custom-number-input w-28 h-full"
}

, Ig= {
    key:0, class:"flex w-full justify-between gap-3 items-center"
}

, kg= {
    class:"flex flex-row w-full relative bg-transparent mt-1 justify-between"
}

, Mg= {
    class:"text-xs underline text-center py-1"
}

, Sr= {
    __name:"ProductSmallCard", props: {
        product: {
            type:Object
        }

        , addToCart: {
            type:Boolean, default: !1
        }
    }

    , setup(e) {
        const t=ne(1), n=()=> {
            t.value++
        }

        , r=()=> {
            t.value>0&&t.value--
        }

        ; return(s, o)=>(J(), X("div", Lg, [o[4]||(o[4]=c("img", {
                        src:"//moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=1667", alt:"MORE LOVE MESH JERSEY GREEN", srcset:`\r //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=100 100w,\r
                        //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=150 150w,\r
                        //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=200 200w,\r
                        //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=250 250w,\r
                        //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=300 300w\r
                        `, width:"1667", height:"2500", loading:"eager", sizes:"100px", class:"w-24"
                    }

                    , null, -1)), c("div", Tg, [c("h6", null, [c("strong", null, F(s.$t("product.otherProductTitle")), 1)]), c("p", Og, F(s.$t("product.otherProductPrice")), 1), o[3]||(o[3]=c("p", {
                        class:"opacity-55"
                    }

                    , "XS", -1)), e.addToCart?(J(), X("p", Ag, F(s.$t("product.addToCart")), 1)):Xe("", !0), c("div", Rg, [e.addToCart?Xe("", !0):(J(), X("div", Ig, [c("div", kg, [c("button", {
                                onClick:r, class:"border border-gray border-r-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer outline-none"
                            }

                            , o[1]||(o[1]=[c("span", {
                                    class:"m-auto text-2xl font-thin"
                                }

                                , "−", -1)])), $t(c("input", {
                            type:"number", "onUpdate:modelValue":o[0]||(o[0]=i=>t.value=i), class:"border-l-0 border-r-0 border-gray outline-none focus:outline-none text-center w-full text-xs hover:text-main focus:text-main cursor-default flex items-center", name:"custom-input-number"
                        }

                        , null, 512), [[Mi, t.value]]), c("button", {
                    onClick:n, class:"border border-gray border-l-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer"
                }

                , o[2]||(o[2]=[c("span", {
                        class:"m-auto text-2xl font-thin"
                    }

                    , "+", -1)]))]), c("p", Mg, F(s.$t("cart.remove")), 1)]))])])]))
}
}

, Pg= {
    class:"fixed inset-0 z-50 overflow-hidden"
}

, Ng= {
    class:"absolute inset-0 bg-zinc-900 bg-opacity-55"
}

, Fg= {
    class:"absolute inset-y-0 right-0 pl-10 max-w-full flex"
}

, Dg= {
    class:"flex items-center justify-between px-4 pb-4 border-b border-gray"
}

, $g= {
    class:"sr-only"
}

, jg= {
    class:"h-3/4 border-b border-gray overflow-auto"
}

, Hg= {
    class:"bg-green-500 text-accent flex gap-2 p-3 text-[12px]"
}

, Ug= {
    class:"flex flex-col gap-1"
}

, Bg= {
    class:"font-bold"
}

, Vg= {
    class:"text-center text-[12px] tracking-normal border border-gray m-3 rounded-lg p-2"
}

, zg= {
    class:"m-4"
}

, Wg= {
    class:"flex items-center gap-2"
}

, Gg= {
    class:"w-4"
}

, Kg= {
    class:"text-xs opacity-55 flex gap-2 p-4 border-b border-gray"
}

, qg= {
    class:"grid gap-4 p-5"
}

, Qg= {
    class:"flex justify-between items-center text-sm w-full"
}

, Jg= {
    class:"flex items-baseline gap-1"
}

, Yg= {
    class:"text-xs opacity-55"
}

, Zg= {
    class:"view-all text-xs text-center flex items-center justify-center gap-3"
}

, Xg= {
    class:"view-all text-xs text-center flex items-center justify-center gap-3"
}

, e0= {
    class:"flex items-center gap-3 text-xs text-main"
}

, t0= {
    __name:"Cart", props: {
        open:Boolean
    }

    , emits:["close"], setup(e, {
        emit:t

    }) {
    const n=e, r=ne(null), s=t; return zo(r, o=> {
            n.open&&s("close")

        }), (o, i)=> {
        const l=Kt("free-shipping-bar"); return J(), X("div", null, [$t(c("div", Pg, [B(Gn, {
                        name:"fade"
                    }

                    , {
                    default:ae(()=>[$t(c("div", Ng, null, 512), [[wn, e.open]])]), _:1

                }), c("section", Fg, [B(Gn, {
                    name:"slide"
                }

                , {
                default:ae(()=>[$t(c("div", {
                            ref_key:"Cart", ref:r, class:"w-screen max-w-md h-full flex flex-col py-6 bg-accent shadow-xl"
                        }

                        , [c("div", Dg, [i[1]||(i[1]=c("h2", {
                                    class:"text-xl uppercase font-semibold text-main"
                                }

                                , " Cart ", -1)), c("button", {
                            onClick:i[0]||(i[0]=a=>o.$emit("close"))
                        }

                        , [c("span", $g, F(o.$t("cart.close")), 1), B(me(hf), {
                            strokeWidth:"1"

                        })])]), c("div", jg, [c("div", Hg, [B(me(Eg), {
                        size:"20"

                    }), c("div", Ug, [c("h3", Bg, F(o.$t("cart.guteWahl")), 1), c("p", null, F(o.$t("cart.yourItems")), 1)])]), B(l, {
                class:"pb-3 border-b border-gray"
            }

            , {
            default:ae(()=>[c("div", Vg, [c("span", null, [c("strong", null, F(o.$t("cart.freeShipping")), 1)]), c("div", zg, [c("div", Wg, [i[2]||(i[2]=c("hr", {
                                    class:"grow border"
                                }

                                , null, -1)), c("span", Gg, [B(me(Sg), {
                                size:"18", fill:"currentColor"

                            })]), i[3]||(i[3]=c("span", {
                            class:"truck_span"
                        }

                        , [c("svg", {
                            width:"26", height:"20", viewBox:"0 0 26 20", fill:"none", xmlns:"http://www.w3.org/2000/svg"
                        }

                        , [c("path", {
                            d:"M4.14066 16.7626H6.14077C6.52725 16.7626 6.84081 16.449 6.84081 16.0625C6.84081 15.6761 6.52725 15.3625 6.14077 15.3625H4.14066C3.75418 15.3625 3.44062 15.6761 3.44062 16.0625C3.44062 16.449 3.75418 16.7626 4.14066 16.7626Z", fill:"black", stroke:"black", "stroke-width":"0.4"

                        }), c("path", {
                        d:"M25.209 12.0812L25.2057 12.0993L24.4466 16.1915L24.4466 16.1915C24.385 16.5234 24.0962 16.7631 23.759 16.7631H21.5719C21.1854 16.7631 20.8719 16.4494 20.8719 16.063C20.8719 15.6766 21.1854 15.363 21.5719 15.363H23.1779L23.8178 11.9529C23.7988 10.2357 22.325 8.76256 20.5087 8.76256H17.3852L15.885 15.363H17.5717C17.9581 15.363 18.2717 15.6766 18.2717 16.063C18.2717 16.4494 17.9582 16.7631 17.5717 16.7631H15.0084C14.7959 16.7631 14.5944 16.6666 14.4613 16.5002C14.3281 16.3345 14.2778 16.116 14.3254 15.9084L14.3253 15.9087L14.5204 15.953L14.3254 15.9082L25.209 12.0812ZM25.209 12.0812V12.0628C25.209 9.47114 23.1003 7.3625 20.5087 7.3625H16.8265C16.4991 7.3625 16.2161 7.58814 16.1434 7.90824M25.209 12.0812L16.1434 7.90824M16.1434 7.90824L16.3385 7.95253L16.1435 7.9082L16.1434 7.90824ZM15.6344 15.563H15.8395L15.6799 15.363L15.6344 15.563Z", fill:"black", stroke:"black", "stroke-width":"0.4"

                    }), c("path", {
                    d:"M16.8703 16.0627C16.8703 17.5522 18.082 18.7628 19.5705 18.7628C21.059 18.7628 22.2706 17.5522 22.2706 16.0627C22.2706 14.573 21.059 13.3625 19.5705 13.3625C18.082 13.3625 16.8703 14.573 16.8703 16.0627ZM18.2704 16.0627C18.2704 15.346 18.8539 14.7626 19.5705 14.7626C20.2871 14.7626 20.8706 15.346 20.8706 16.0627C20.8706 16.7792 20.2871 17.3628 19.5705 17.3628C18.8539 17.3628 18.2704 16.7792 18.2704 16.0627Z", fill:"black", stroke:"black", "stroke-width":"0.4"

                }), c("path", {
                d:"M5.44062 16.0627C5.44062 17.5522 6.65229 18.7628 8.14078 18.7628C9.62928 18.7628 10.8409 17.5522 10.8409 16.0627C10.8409 14.573 9.62928 13.3625 8.14078 13.3625C6.65229 13.3625 5.44062 14.573 5.44062 16.0627ZM6.84069 16.0627C6.84069 15.346 7.42416 14.7626 8.14078 14.7626C8.85736 14.7626 9.44088 15.346 9.44088 16.0627C9.44088 16.7792 8.85735 17.3628 8.14078 17.3628C7.42417 17.3628 6.84069 16.7792 6.84069 16.0627Z", fill:"black", stroke:"black", "stroke-width":"0.4"

            }), c("path", {
            d:"M3.50784 5.88756H7.50811C7.89459 5.88756 8.20814 5.57401 8.20814 5.18753C8.20814 4.80106 7.89459 4.4875 7.50811 4.4875H3.50784C3.12137 4.4875 2.80781 4.80106 2.80781 5.18753C2.80781 5.57401 3.12137 5.88756 3.50784 5.88756Z", fill:"black", stroke:"black", "stroke-width":"0.4"

        }), c("path", {
        d:"M2.50784 8.88756H7.50815C7.89463 8.88756 8.20819 8.57401 8.20819 8.18753C8.20819 7.80106 7.89463 7.4875 7.50815 7.4875H2.50784C2.12137 7.4875 1.80781 7.80106 1.80781 8.18753C1.80781 8.57401 2.12137 8.88756 2.50784 8.88756Z", fill:"black", stroke:"black", "stroke-width":"0.4"

    }), c("path", {
    d:"M1.50784 11.8876H7.50823C7.8947 11.8876 8.20826 11.574 8.20826 11.1875C8.20826 10.8011 7.8947 10.4875 7.50823 10.4875H1.50784C1.12137 10.4875 0.807812 10.8011 0.807812 11.1875C0.807812 11.574 1.12137 11.8876 1.50784 11.8876Z", fill:"black", stroke:"black", "stroke-width":"0.4"

}), c("path", {
    d:"M15.5084 14.6383H12.0082C11.6217 14.6383 11.3082 14.3248 11.3082 13.9383C11.3082 13.5518 11.6217 13.2383 12.0082 13.2383H14.9501L17.3806 2.63756H6.25784C5.87137 2.63756 5.55781 2.32401 5.55781 1.93753C5.55781 1.55106 5.87137 1.2375 6.25784 1.2375H18.2586C18.4711 1.2375 18.6726 1.33391 18.8057 1.50041C18.9389 1.66608 18.9893 1.88466 18.9416 2.09232M15.5084 14.6383L18.7466 2.04754M15.5084 14.6383C15.8347 14.6383 16.1188 14.4128 16.1915 14.0926M15.5084 14.6383L15.9965 14.0483M18.9416 2.09232L18.7466 2.04754M18.9416 2.09232L18.9416 2.09221L18.7466 2.04754M18.9416 2.09232L16.1915 14.0926M18.7466 2.04754L15.9965 14.0483M16.1915 14.0926L15.9965 14.0483M16.1915 14.0926L16.1914 14.093L15.9965 14.0483", fill:"black", stroke:"black", "stroke-width":"0.4"
})])], -1))])])])]), _:1

}), B(Sr), B(Sr), B(Sr), i[4]||(i[4]=c("p", {
        class:"uppercase text-xs p-5 border-t border-gray"
    }

    , " Complete With ", -1)), B(Sr, {
    addToCart:"true"

}), B(Sr, {
    addToCart:"true"

}), B(Sr, {
    addToCart:"true"

})]), c("p", Kg, [B(me(ff), {
        strokeWidth:"1", size:"16"

    }), ue(" " +F(o.$t("cart.notReserved")), 1)]), c("div", qg, [c("div", Qg, [c("div", Jg, [c("h6", null, [c("strong", null, F(o.$t("cart.total")), 1)]), c("p", Yg, F(o.$t("cart.inclTax")), 1)]), i[5]||(i[5]=c("div", null, "289.97$", -1))]), c("div", Zg, [B(me(pc), {
            size:"18"

        }), ue(" " +F(o.$t("buttons.sicherZahlen")), 1)]), c("div", Xg, [B(me(pc), {
        size:"18"

    }), ue(" " +F(o.$t("buttons.sicherZahlen")), 1)]), c("p", e0, [i[6]||(i[6]=c("svg", {
            width:"48", height:"30", viewBox:"0 0 48 30", fill:"none", xmlns:"http://www.w3.org/2000/svg"
        }

        , [c("rect", {
            width:"48", height:"30", rx:"6", fill:"white"

        }), c("rect", {
        x:"0.5", y:"0.5", width:"47", height:"29", rx:"5.5", stroke:"#DDDDDD", "stroke-opacity":"0.3"

    }), c("path", {
    "fill-rule":"evenodd", "clip-rule":"evenodd", d:"M13.5805 19.0547H11.4471C11.3011 19.0547 11.1769 19.1514 11.1542 19.2827L10.2913 24.269C10.2742 24.3675 10.3578 24.4561 10.4672 24.4561H11.4858C11.6318 24.4561 11.7559 24.3594 11.7787 24.2279L12.0114 22.883C12.0339 22.7513 12.1583 22.6547 12.304 22.6547H12.9794C14.3847 22.6547 15.1958 22.0348 15.4077 20.8065C15.5031 20.2692 15.4117 19.8469 15.1356 19.5511C14.8324 19.2265 14.2945 19.0547 13.5805 19.0547ZM13.8266 20.8759C13.71 21.5736 13.1251 21.5736 12.5595 21.5736H12.2376L12.4634 20.2705C12.4768 20.1918 12.5517 20.1338 12.639 20.1338H12.7866C13.1719 20.1338 13.5353 20.1338 13.7231 20.3339C13.835 20.4534 13.8694 20.6307 13.8266 20.8759ZM19.9578 20.8535H18.9362C18.8491 20.8535 18.7739 20.9115 18.7605 20.9903L18.7153 21.2507L18.6438 21.1564C18.4227 20.8638 17.9295 20.766 17.4373 20.766C16.3082 20.766 15.344 21.5454 15.1562 22.6386C15.0586 23.1839 15.1973 23.7054 15.5367 24.069C15.8481 24.4034 16.2936 24.5427 16.8236 24.5427C17.7332 24.5427 18.2377 24.0096 18.2377 24.0096L18.1921 24.2684C18.1749 24.3673 18.2585 24.456 18.3674 24.456H19.2877C19.4341 24.456 19.5575 24.3593 19.5806 24.2277L20.1328 21.0406C20.1502 20.9426 20.0669 20.8535 19.9578 20.8535ZM18.5337 22.6659C18.4351 23.1979 17.9718 23.555 17.3811 23.555C17.0844 23.555 16.8473 23.4683 16.6951 23.3039C16.5441 23.1408 16.4866 22.9084 16.5347 22.6497C16.6268 22.1222 17.0979 21.7535 17.6796 21.7535C17.9697 21.7535 18.2055 21.8413 18.3609 22.0071C18.5165 22.1746 18.5783 22.4082 18.5337 22.6659ZM24.3722 20.8534H25.3989C25.5427 20.8534 25.6266 21.0004 25.5449 21.1079L22.1303 25.6002C22.075 25.673 21.9839 25.7163 21.8866 25.7163H20.8612C20.7169 25.7163 20.6325 25.5681 20.7161 25.4604L21.7794 24.0925L20.6486 21.0677C20.6094 20.9626 20.6946 20.8534 20.8173 20.8534H21.8261C21.9572 20.8534 22.0728 20.9318 22.1107 21.0461L22.7108 22.873L24.1268 20.9719C24.1822 20.8977 24.2744 20.8534 24.3722 20.8534Z", fill:"#253B80"

}), c("path", {
    "fill-rule":"evenodd", "clip-rule":"evenodd", d:"M35.5048 24.2693L36.3803 19.1918C36.3937 19.113 36.4687 19.055 36.5557 19.0547H37.5414C37.6503 19.0547 37.7338 19.1436 37.7167 19.2421L36.8532 24.2281C36.8307 24.3597 36.7066 24.4564 36.5603 24.4564H35.68C35.5712 24.4564 35.4876 24.3677 35.5048 24.2693ZM28.7993 19.055H26.6655C26.5199 19.055 26.3957 19.1517 26.3729 19.283L25.5101 24.2693C25.4929 24.3677 25.5765 24.4564 25.6855 24.4564H26.7803C26.8821 24.4564 26.9691 24.3888 26.985 24.2967L27.2298 22.8833C27.2524 22.7515 27.3768 22.655 27.5225 22.655H28.1975C29.6031 22.655 30.414 22.0351 30.6261 20.8068C30.7218 20.2694 30.6298 19.8472 30.3538 19.5514C30.0508 19.2268 29.5133 19.055 28.7993 19.055ZM29.0455 20.8761C28.9291 21.5739 28.3442 21.5739 27.7783 21.5739H27.4566L27.6828 20.2707C27.6963 20.1921 27.7705 20.134 27.8581 20.134H28.0056C28.3906 20.134 28.7544 20.134 28.9421 20.3342C29.0541 20.4536 29.0882 20.631 29.0455 20.8761ZM35.1761 20.8538H34.1551C34.0674 20.8538 33.9929 20.9118 33.9797 20.9906L33.9345 21.251L33.8628 21.1567C33.6416 20.864 33.1488 20.7663 32.6565 20.7663C31.5275 20.7663 30.5636 21.5456 30.3758 22.6389C30.2785 23.1842 30.4166 23.7056 30.756 24.0693C31.068 24.4036 31.5129 24.543 32.0428 24.543C32.9525 24.543 33.4569 24.0098 33.4569 24.0098L33.4114 24.2686C33.3942 24.3676 33.4778 24.4563 33.5874 24.4563H34.5072C34.6529 24.4563 34.777 24.3596 34.7998 24.228L35.3523 21.0409C35.3692 20.9429 35.2856 20.8538 35.1761 20.8538ZM33.7521 22.6661C33.6541 23.1981 33.1902 23.5552 32.5994 23.5552C32.3033 23.5552 32.0656 23.4685 31.9133 23.3042C31.7623 23.141 31.7056 22.9086 31.7531 22.65C31.8456 22.1225 32.3161 21.7538 32.8979 21.7538C33.1881 21.7538 33.4238 21.8415 33.5793 22.0073C33.7355 22.1748 33.7973 22.4085 33.7521 22.6661Z", fill:"#179BD7"

}), c("path", {
    d:"M21.4789 17.2721L21.7412 15.7537L21.157 15.7414H18.3672L20.306 4.53656C20.3119 4.50273 20.3315 4.47119 20.3601 4.4488C20.3887 4.4264 20.4253 4.41406 20.4635 4.41406H25.1675C26.7292 4.41406 27.8068 4.71026 28.3695 5.29488C28.6333 5.56914 28.8013 5.85574 28.8826 6.17113C28.9678 6.50208 28.9694 6.89746 28.8861 7.3797L28.88 7.4149V7.72389L29.1439 7.86011C29.3661 7.96752 29.5425 8.09048 29.6779 8.23127C29.9037 8.46576 30.0496 8.76378 30.1113 9.11711C30.1749 9.48051 30.1539 9.91292 30.0496 10.4025C29.9292 10.9656 29.7346 11.4561 29.4719 11.8574C29.2301 12.2272 28.9222 12.5338 28.5566 12.7716C28.2076 12.9974 27.7928 13.1688 27.3239 13.2786C26.8695 13.3863 26.3515 13.4408 25.7833 13.4408H25.4172C25.1555 13.4408 24.9011 13.5267 24.7016 13.6808C24.5015 13.8381 24.369 14.0528 24.3284 14.2878L24.3009 14.4245L23.8375 17.1007L23.8164 17.199C23.8109 17.2302 23.8014 17.2457 23.7874 17.2562C23.7748 17.2657 23.7568 17.2721 23.7392 17.2721H21.4789Z", fill:"#253B80"

}), c("path", {
    d:"M29.3926 7.45312C29.3786 7.53494 29.3626 7.61859 29.3445 7.70452C28.7241 10.6075 26.6018 11.6104 23.8912 11.6104H22.5111C22.1796 11.6104 21.9003 11.8298 21.8486 12.1278L21.1419 16.2125L20.9419 17.3703C20.9082 17.5659 21.0738 17.7424 21.2903 17.7424H23.7383C24.0282 17.7424 24.2743 17.5504 24.3199 17.2899L24.344 17.1764L24.805 14.5106L24.8346 14.3645C24.8796 14.103 25.1263 13.911 25.4162 13.911H25.7823C28.1539 13.911 30.0105 13.0334 30.5531 10.4937C30.7798 9.4328 30.6624 8.54696 30.0626 7.92393C29.8811 7.73606 29.6559 7.58019 29.3926 7.45312Z", fill:"#179BD7"

}), c("path", {
    d:"M28.7389 7.21076C28.6442 7.18562 28.5463 7.16276 28.446 7.14219C28.3452 7.12209 28.2418 7.10426 28.1356 7.08872C27.7634 7.03387 27.3558 7.00781 26.9189 7.00781H23.2319C23.1411 7.00781 23.0549 7.02655 22.9777 7.06038C22.8076 7.13488 22.6813 7.28162 22.6507 7.46125L21.8663 11.9892L21.8438 12.1213C21.8954 11.8233 22.1748 11.6039 22.5062 11.6039H23.8863C26.597 11.6039 28.7194 10.6006 29.3397 7.69802C29.3582 7.61209 29.3738 7.52845 29.3878 7.44663C29.2309 7.37075 29.0608 7.30584 28.8778 7.25052C28.8327 7.23681 28.7861 7.22356 28.7389 7.21076Z", fill:"#222D65"

}), c("path", {
    d:"M22.6495 7.46449C22.6801 7.28485 22.8065 7.13812 22.9765 7.06407C23.0543 7.03024 23.14 7.0115 23.2307 7.0115H26.9178C27.3546 7.0115 27.7623 7.03756 28.1343 7.09241C28.2407 7.10795 28.3441 7.12578 28.4449 7.14589C28.5452 7.16647 28.6429 7.18932 28.7378 7.21445C28.7848 7.22725 28.8315 7.2405 28.8771 7.25377C29.0601 7.30907 29.2302 7.37444 29.3871 7.44986C29.5717 6.37706 29.3857 5.64662 28.7493 4.9852C28.0477 4.25705 26.7814 3.94531 25.1611 3.94531H20.4569C20.1259 3.94531 19.8437 4.16471 19.7924 4.4632L17.8332 15.7832C17.7945 16.0071 17.984 16.2092 18.2317 16.2092H21.136L21.8652 11.9925L22.6495 7.46449Z", fill:"#253B80"
})], -1)), ue(" " +F(o.$t("cart.securePayPaypal")), 1)])])], 512), [[wn, e.open]])]), _:1
})])], 512), [[wn, e.open]])])
}
}
}

, n0=dt(t0, [["__scopeId", "data-v-29d01e2b"]]), r0="/test-piepjackclothing/assets/logo-DGfM7bK8.png", s0= {
    class:"fixed inset-0 z-50 overflow-hidden text-xs"
}

, o0= {
    class:"absolute inset-0 bg-zinc-900 bg-opacity-55"
}

, i0= {
    class:"absolute inset-y-0 left-0 max-w-full flex"
}

, l0= {
    class:"flex items-center justify-between px-4"
}

, a0= {
    key:0, class:"flex flex-col h-1/2 uppercase relative p-4"
}

, c0= {
    key:1, class:"flex flex-col h-1/2 uppercase relative p-4"
}

, u0= {
    class:"flex flex-col"
}

, d0= {
    class:"font-bold"
}

, f0= {
    key:2, class:"flex flex-col h-1/2 uppercase relative p-4"
}

, h0= {
    class:"flex flex-col"
}

, p0= {
    __name:"NavSidebar", props: {
        nav:Boolean
    }

    , emits:["close"], setup(e, {
        emit:t

    }) {
    const n=e, r=ne(null), s=ne(1), o=t; zo(r, a=> {
            n.nav&&o("closeNav")

        }); const i=[ {
        title:"T-SHIRTS & LONGSLEEVES"
    }

    , {
    title:"HOODIES & ZIPPER"
}

, {
title:"JACKETS & VESTS"
}

, {
title:"PANTS & JOGGERS"
}

, {
title:"SHORTS"
}

, {
title:"ACCESSORIES"
}

], l=["OFF THE RADAR", "CASHLANE", "STACKS", "EVERYBODY LOVES CASH", "MONEY TALKS BETTER DROP DENIMS"]; return(a, u)=> {
    const d=Kt("router-link"); return $t((J(), X("div", s0, [B(Gn, {
                    name:"fade"
                }

                , {
                default:ae(()=>[$t(c("div", o0, null, 512), [[wn, e.nav]])]), _:1

            }), c("section", i0, [B(Gn, {
                name:"slide"
            }

            , {
            default:ae(()=>[$t(c("div", {
                        class:"w-screen max-w-md h-full flex flex-col py-6 bg-accent shadow-xl me-24", ref_key:"NavSidebar", ref:r
                    }

                    , [c("div", l0, [c("button", {
                            onClick:u[0]||(u[0]=f=>a.$emit("closeNav"))
                        }

                        , u[6]||(u[6]=[c("span", {
                                class:"sr-only"
                            }

                            , "Close", -1), c("svg", {
                            class:"h-8 w-8 opacity-55", xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", stroke:"currentColor", "aria-hidden":"true"
                        }

                        , [c("path", {
                            "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-width":"1", d:"M6 18L18 6M6 6l12 12"

                        })], -1)]))]), s.value===1?(J(), X("div", a0, [c("div", {
                class:"flex justify-between items-center h-full border-animate border-gray border-b cursor-pointer px-1", onClick:u[1]||(u[1]=f=>s.value=2)
            }

            , [u[7]||(u[7]=c("p", {
                    class:"cursor-pointer text-xs"
                }

                , "SHOP ALL", -1)), B(me($i), {
            strokeWidth:"1", size:"20"

        })]), u[10]||(u[10]=c("div", {
        class:"flex items-center h-full border-animate border-gray border-b cursor-pointer px-1"
    }

    , [c("a", {
        class:"cursor-pointer text-xs"
    }

    , " MYSTERY BOX ")], -1)), c("div", {
    class:"flex justify-between items-center h-full border-animate border-gray border-b cursor-pointer px-1", onClick:u[2]||(u[2]=f=>s.value=3)
}

, [u[8]||(u[8]=c("div", {
        class:"cursor-pointer text-xs"
    }

    , " COLLECTIONS ", -1)), B(me($i), {
    strokeWidth:"1", size:"20"

})]), u[11]||(u[11]=c("div", {
        class:"flex items-center h-full border-animate border-gray border-b cursor-pointer px-1"
    }

    , [c("a", {
        class:"cursor-pointer text-xs"
    }

    , " BESTSELLER ")], -1)), B(d, {
    to:"/about", onClick:u[3]||(u[3]=f=>a.$emit("closeNav")), class:"flex items-center h-full border-animate border-gray border-b cursor-pointer px-1"
}

, {
default:ae(()=>u[9]||(u[9]=[c("span", {
            class:"cursor-pointer text-xs"
        }

        , " ABOUT US ", -1)])), _:1

})])):Xe("", !0), s.value===2?(J(), X("div", c0, [c("div", {
            class:"flex justify-between items-center border-animate border-gray border-b cursor-pointer px-1 py-4", onClick:u[4]||(u[4]=f=>s.value=1)
        }

        , [B(me(Di), {
            strokeWidth:"1", size:"20"

        }), u[12]||(u[12]=c("p", {
            class:"text-xs"
        }

        , "SHOP ALL", -1))]), c("div", u0, [u[13]||(u[13]=c("div", {
            class:"flex flex-col py-4 border-b border-gray justify-center align-middle"
        }

        , [c("h5", {
            class:"font-bold"
        }

        , "SHOP ALL")], -1)), B(So, {
    name:"fade-up", tag:"div", class:"flex flex-col justify-center"
}

, {
default:ae(()=>[(J(), X(we, null, yn(i, (f, h)=>c("div", {
                    key:h, class:"flex flex-col py-4 border-b border-gray justify-center align-middle"
                }

                , [c("h5", d0, F(f.title), 1)])), 64))]), _:1

})])])):Xe("", !0), s.value===3?(J(), X("div", f0, [c("div", {
            class:"flex justify-between items-center border-animate border-gray border-b cursor-pointer px-1 py-4", onClick:u[5]||(u[5]=f=>s.value=1)
        }

        , [B(me(Di), {
            strokeWidth:"1", size:"20"

        }), u[14]||(u[14]=c("p", {
            class:"uppercase text-xs"
        }

        , "collections", -1))]), c("div", h0, [B(So, {
        name:"fade-up", tag:"div", class:"flex flex-col justify-center"
    }

    , {
    default:ae(()=>[(J(), X(we, null, yn(l, (f, h)=>c("span", {
                        key:h, class:"flex flex-col py-4 border-b border-gray justify-center align-middle"
                    }

                    , F(f), 1)), 64))]), _:1
})])])):Xe("", !0)], 512), [[wn, e.nav]])]), _:1
})])], 512)), [[wn, e.nav]])
}
}
}

, m0=dt(p0, [["__scopeId", "data-v-a6c8e102"]]);

/*!
  * shared v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const xo=typeof window<"u", Zn=(e, t= !1)=>t?Symbol.for(e):Symbol(e), g0=(e, t, n)=>b0({
    l:e, k:t, s:n

}), b0=e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Je=e=>typeof e=="number" &&isFinite(e), _0=e=>zl(e)==="[object Date]", Zr=e=>zl(e)==="[object RegExp]", Wo=e=>de(e)&&Object.keys(e).length===0, et=Object.assign; let mc; const or=()=>mc||(mc=typeof globalThis<"u" ?globalThis:typeof self<"u" ?self:typeof window<"u" ?window:typeof global<"u" ?global: {}); function gc(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g," &quot; ").replace(/'/g," &apos; ")}const v0=Object.prototype.hasOwnProperty;function Co(e,t){return v0.call(e,t)}const Ue=Array.isArray,Fe=e=>typeof e==" function",Q=e=>typeof e==" string",Se=e=>typeof e==" boolean",Le=e=>e!==null&&typeof e==" object",y0=e=>Le(e)&&Fe(e.then)&&Fe(e.catch),pf=Object.prototype.toString,zl=e=>pf.call(e),de=e=>zl(e)==="[object Object]",w0=e=>e==null?" ":Ue(e)||de(e)&&e.toString===pf?JSON.stringify(e,null,2):String(e);function Wl(e,t=" "){return e.reduce((n,r,s)=>s===0?n+r:n+t+r," ")}function E0(e,t){typeof console<" u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const no=e=>!Le(e)||Ue(e);function fo(e,t){if(no(e)||no(t))throw new Error(" Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(o=>{Le(r[o])&&!Le(s[o])&&(s[o]=Array.isArray(r[o])?[]:{}),no(s[o])||no(r[o])?s[o]=r[o]:n.push({src:r[o],des:s[o]})})}}/*!
 * message-compiler v10.0.4 * (c) 2024 kazuya kawaguchi * Released under the MIT License. */function S0(e, t, n) {
            return {
                line:e, column:t, offset:n
            }
        }

        function ji(e, t, n) {
            return {
                start:e, end:t
            }
        }

        const Re= {
            EXPECTED_TOKEN:1, INVALID_TOKEN_IN_PLACEHOLDER:2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3, UNKNOWN_ESCAPE_SEQUENCE:4, INVALID_UNICODE_ESCAPE_SEQUENCE:5, UNBALANCED_CLOSING_BRACE:6, UNTERMINATED_CLOSING_BRACE:7, EMPTY_PLACEHOLDER:8, NOT_ALLOW_NEST_PLACEHOLDER:9, INVALID_LINKED_FORMAT:10, MUST_HAVE_MESSAGES_IN_PLURAL:11, UNEXPECTED_EMPTY_LINKED_MODIFIER:12, UNEXPECTED_EMPTY_LINKED_KEY:13, UNEXPECTED_LEXICAL_ANALYSIS:14, UNHANDLED_CODEGEN_NODE_TYPE:15, UNHANDLED_MINIFIER_NODE_TYPE:16
        }

        , x0=17; function Go(e, t, n= {}) {
            const {
                domain:r, messages:s, args:o
            }

            =n, i=e, l=new SyntaxError(String(i)); return l.code=e, t&&(l.location=t), l.domain=r, l
        }

        function C0(e) {
            throw e
        }

        const dn=" ", L0="\r", pt=` `, T0="\u2028", O0="\u2029"; function A0(e) {
            const t=e; let n=0, r=1, s=1, o=0; const i=R=>t[R]===L0&&t[R+1]===pt, l=R=>t[R]===pt, a=R=>t[R]===O0, u=R=>t[R]===T0, d=R=>i(R)||l(R)||a(R)||u(R), f=()=>n, h=()=>r, p=()=>s, y=()=>o, w=R=>i(R)||a(R)||u(R)?pt:t[R], E=()=>w(n), b=()=>w(n+o); function S() {
                return o=0, d(n)&&(r++, s=0), i(n)&&n++, n++, s++, t[n]
            }

            function L() {
                return i(n+o)&&o++, o++, t[n+o]
            }

            function x() {
                n=0, r=1, s=1, o=0
            }

            function M(R=0) {
                o=R
            }

            function $() {
                const R=n+o; for(; R !==n; )S(); o=0
            }

            return {
                index:f, line:h, column:p, peekOffset:y, charAt:w, currentChar:E, currentPeek:b, next:S, peek:L, reset:x, resetPeek:M, skipToPeek:$
            }
        }

        const An=void 0, R0=".", bc="'", I0="tokenizer"; function k0(e, t= {}) {
            const n=t.location !== !1, r=A0(e), s=()=>r.index(), o=()=>S0(r.line(), r.column(), r.index()), i=o(), l=s(), a= {
                currentType:13, offset:l, startLoc:i, endLoc:i, lastType:13, lastOffset:l, lastStartLoc:i, lastEndLoc:i, braceNest:0, inLinked: !1, text:""
            }

            , u=()=>a, {
            onError:d
        }

        =t; function f(m, v, O, ...k) {
            const j=u(); if(v.column+=O, v.offset+=O, d) {
                const z=n?ji(j.startLoc, v):null, C=Go(m, z, {
                    domain:I0, args:k
                }); d(C)
        }
    }

    function h(m, v, O) {
        m.endLoc=o(), m.currentType=v; const k= {
            type:v
        }

        ; return n&&(k.loc=ji(m.startLoc, m.endLoc)), O !=null&&(k.value=O), k
    }

    const p=m=>h(m, 13); function y(m, v) {
        return m.currentChar()===v?(m.next(), v):(f(Re.EXPECTED_TOKEN, o(), 0, v), "")
    }

    function w(m) {
        let v=""; for(; m.currentPeek()===dn||m.currentPeek()===pt; )v+=m.currentPeek(), m.peek(); return v
    }

    function E(m) {
        const v=w(m); return m.skipToPeek(), v
    }

    function b(m) {
        if(m===An)return !1; const v=m.charCodeAt(0); return v>=97&&v<=122||v>=65&&v<=90||v===95
    }

    function S(m) {
        if(m===An)return !1; const v=m.charCodeAt(0); return v>=48&&v<=57
    }

    function L(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==2)return !1; w(m); const k=b(m.currentPeek()); return m.resetPeek(), k
    }

    function x(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==2)return !1; w(m); const k=m.currentPeek()==="-" ?m.peek():m.currentPeek(), j=S(k); return m.resetPeek(), j
    }

    function M(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==2)return !1; w(m); const k=m.currentPeek()===bc; return m.resetPeek(), k
    }

    function $(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==7)return !1; w(m); const k=m.currentPeek()==="."; return m.resetPeek(), k
    }

    function R(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==8)return !1; w(m); const k=b(m.currentPeek()); return m.resetPeek(), k
    }

    function G(m, v) {
        const {
            currentType:O
        }

        =v; if( !(O===7||O===11))return !1; w(m); const k=m.currentPeek()===":"; return m.resetPeek(), k
    }

    function U(m, v) {
        const {
            currentType:O
        }

        =v; if(O !==9)return !1; const k=()=> {
            const z=m.currentPeek(); return z==="{" ?b(m.peek()):z==="@" ||z==="|" ||z===":" ||z==="." ||z===dn|| !z? !1:z===pt?(m.peek(), k()):re(m, !1)
        }

        , j=k(); return m.resetPeek(), j
    }

    function ee(m) {
        w(m); const v=m.currentPeek()==="|"; return m.resetPeek(), v
    }

    function re(m, v= !0) {
        const O=(j= !1, z="")=> {
            const C=m.currentPeek(); return C==="{" ||C==="@" || !C?j:C==="|" ? !(z===dn||z===pt):C===dn?(m.peek(), O( !0, dn)):C===pt?(m.peek(), O( !0, pt)): !0
        }

        , k=O(); return v&&m.resetPeek(), k
    }

    function V(m, v) {
        const O=m.currentChar(); return O===An?An:v(O)?(m.next(), O):null
    }

    function le(m) {
        const v=m.charCodeAt(0); return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36
    }

    function Me(m) {
        return V(m, le)
    }

    function ot(m) {
        const v=m.charCodeAt(0); return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36||v===45
    }

    function Ie(m) {
        return V(m, ot)
    }

    function ge(m) {
        const v=m.charCodeAt(0); return v>=48&&v<=57
    }

    function he(m) {
        return V(m, ge)
    }

    function je(m) {
        const v=m.charCodeAt(0); return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102
    }

    function it(m) {
        return V(m, je)
    }

    function tt(m) {
        let v="", O=""; for(; v=he(m); )O+=v; return O
    }

    function Pe(m) {
        let v=""; for(; ; ) {
            const O=m.currentChar(); if(O==="{" ||O==="}" ||O==="@" ||O==="|" || !O)break; if(O===dn||O===pt)if(re(m))v+=O, m.next(); else {
                if(ee(m))break; v+=O, m.next()
            }

            else v+=O, m.next()
        }

        return v
    }

    function nt(m) {
        E(m); let v="", O=""; for(; v=Ie(m); )O+=v; return m.currentChar()===An&&f(Re.UNTERMINATED_CLOSING_BRACE, o(), 0), O
    }

    function ft(m) {
        E(m); let v=""; return m.currentChar()==="-" ?(m.next(), v+=`-$ {
                tt(m)
            }

            `):v+=tt(m), m.currentChar()===An&&f(Re.UNTERMINATED_CLOSING_BRACE, o(), 0), v
    }

    function Ht(m) {
        return m !==bc&&m !==pt
    }

    function qe(m) {
        E(m), y(m, "'"); let v="", O=""; for(; v=V(m, Ht); )v==="\\" ?O+=H(m):O+=v; const k=m.currentChar(); return k===pt||k===An?(f(Re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), k===pt&&(m.next(), y(m, "'")), O):(y(m, "'"), O)
    }

    function H(m) {
        const v=m.currentChar(); switch(v) {
            case"\\":case"'":return m.next(), `\\$ {
                v
            }

            `; case"u":return K(m, v, 4); case"U":return K(m, v, 6); default:return f(Re.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v), ""
        }
    }

    function K(m, v, O) {
        y(m, v); let k=""; for(let j=0; j<O; j++) {
            const z=it(m); if( !z) {
                f(Re.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\$ {
                        v
                    }

                    $ {
                        k
                    }

                    $ {
                        m.currentChar()
                    }

                    `); break
            }

            k+=z
        }

        return`\\$ {
            v
        }

        $ {
            k
        }

        `
    }

    function W(m) {
        return m !=="{" &&m !=="}" &&m !==dn&&m !==pt
    }

    function Y(m) {
        E(m); let v="", O=""; for(; v=V(m, W); )O+=v; return O
    }

    function pe(m) {
        let v="", O=""; for(; v=Me(m); )O+=v; return O
    }

    function Ce(m) {
        const v=O=> {
            const k=m.currentChar(); return k==="{" ||k==="@" ||k==="|" ||k==="(" ||k===")" || !k||k===dn?O:(O+=k, m.next(), v(O))
        }

        ; return v("")
    }

    function _(m) {
        E(m); const v=y(m, "|"); return E(m), v
    }

    function g(m, v) {
        let O=null; switch(m.currentChar()) {
            case"{":return v.braceNest>=1&&f(Re.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O=h(v, 2, "{"), E(m), v.braceNest++, O; case"}":return v.braceNest>0&&v.currentType===2&&f(Re.EMPTY_PLACEHOLDER, o(), 0), m.next(), O=h(v, 3, "}"), v.braceNest--, v.braceNest>0&&E(m), v.inLinked&&v.braceNest===0&&(v.inLinked= !1), O; case"@":return v.braceNest>0&&f(Re.UNTERMINATED_CLOSING_BRACE, o(), 0), O=A(m, v)||p(v), v.braceNest=0, O; default: {
                let j= !0, z= !0, C= !0; if(ee(m))return v.braceNest>0&&f(Re.UNTERMINATED_CLOSING_BRACE, o(), 0), O=h(v, 1, _(m)), v.braceNest=0, v.inLinked= !1, O; if(v.braceNest>0&&(v.currentType===4||v.currentType===5||v.currentType===6))return f(Re.UNTERMINATED_CLOSING_BRACE, o(), 0), v.braceNest=0, D(m, v); if(j=L(m, v))return O=h(v, 4, nt(m)), E(m), O; if(z=x(m, v))return O=h(v, 5, ft(m)), E(m), O; if(C=M(m, v))return O=h(v, 6, qe(m)), E(m), O; if( !j&& !z&& !C)return O=h(v, 12, Y(m)), f(Re.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), E(m), O; break
            }
        }

        return O
    }

    function A(m, v) {
        const {
            currentType:O
        }

        =v; let k=null; const j=m.currentChar(); switch((O===7||O===8||O===11||O===9)&&(j===pt||j===dn)&&f(Re.INVALID_LINKED_FORMAT, o(), 0), j) {
            case"@":return m.next(), k=h(v, 7, "@"), v.inLinked= !0, k; case".":return E(m), m.next(), h(v, 8, "."); case":":return E(m), m.next(), h(v, 9, ":"); default:return ee(m)?(k=h(v, 1, _(m)), v.braceNest=0, v.inLinked= !1, k):$(m, v)||G(m, v)?(E(m), A(m, v)):R(m, v)?(E(m), h(v, 11, pe(m))):U(m, v)?(E(m), j==="{" ?g(m, v)||k:h(v, 10, Ce(m))):(O===7&&f(Re.INVALID_LINKED_FORMAT, o(), 0), v.braceNest=0, v.inLinked= !1, D(m, v))
        }
    }

    function D(m, v) {
        let O= {
            type:13
        }

        ; if(v.braceNest>0)return g(m, v)||p(v); if(v.inLinked)return A(m, v)||p(v); switch(m.currentChar()) {
            case"{":return g(m, v)||p(v); case"}":return f(Re.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), h(v, 3, "}"); case"@":return A(m, v)||p(v); default: {
                if(ee(m))return O=h(v, 1, _(m)), v.braceNest=0, v.inLinked= !1, O; if(re(m))return h(v, 0, Pe(m)); break
            }
        }

        return O
    }

    function N() {
        const {
            currentType:m, offset:v, startLoc:O, endLoc:k
        }

        =a; return a.lastType=m, a.lastOffset=v, a.lastStartLoc=O, a.lastEndLoc=k, a.offset=s(), a.startLoc=o(), r.currentChar()===An?h(a, 13):D(r, a)
    }

    return {
        nextToken:N, currentOffset:s, currentPosition:o, context:u
    }
}

const M0="parser", P0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function N0(e,t,n){switch(e){case"\\\\":return"\\";case"\\' ":return" '";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function F0(e={}){const t=e.location!==!1,{onError:n}=e;function r(b,S,L,x,...M){const $=b.currentPosition();if($.offset+=x,$.column+=x,n){const R=t?ji(L,$):null,G=Go(S,R,{domain:M0,args:M});n(G)}}function s(b,S,L){const x={type:b};return t&&(x.start=S,x.end=S,x.loc={start:L,end:L}),x}function o(b,S,L,x){t&&(b.end=S,b.loc&&(b.loc.end=L))}function i(b,S){const L=b.context(),x=s(3,L.offset,L.startLoc);return x.value=S,o(x,b.currentOffset(),b.currentPosition()),x}function l(b,S){const L=b.context(),{lastOffset:x,lastStartLoc:M}=L,$=s(5,x,M);return $.index=parseInt(S,10),b.nextToken(),o($,b.currentOffset(),b.currentPosition()),$}function a(b,S){const L=b.context(),{lastOffset:x,lastStartLoc:M}=L,$=s(4,x,M);return $.key=S,b.nextToken(),o($,b.currentOffset(),b.currentPosition()),$}function u(b,S){const L=b.context(),{lastOffset:x,lastStartLoc:M}=L,$=s(9,x,M);return $.value=S.replace(P0,N0),b.nextToken(),o($,b.currentOffset(),b.currentPosition()),$}function d(b){const S=b.nextToken(),L=b.context(),{lastOffset:x,lastStartLoc:M}=L,$=s(8,x,M);return S.type!==11?(r(b,Re.UNEXPECTED_EMPTY_LINKED_MODIFIER,L.lastStartLoc,0),$.value="",o($,x,M),{nextConsumeToken:S,node:$}):(S.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,Yt(S)),$.value=S.value||"",o($,b.currentOffset(),b.currentPosition()),{node:$})}function f(b,S){const L=b.context(),x=s(7,L.offset,L.startLoc);return x.value=S,o(x,b.currentOffset(),b.currentPosition()),x}function h(b){const S=b.context(),L=s(6,S.offset,S.startLoc);let x=b.nextToken();if(x.type===8){const M=d(b);L.modifier=M.node,x=M.nextConsumeToken||b.nextToken()}switch(x.type!==9&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(x)),x=b.nextToken(),x.type===2&&(x=b.nextToken()),x.type){case 10:x.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(x)),L.key=f(b,x.value||"");break;case 4:x.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(x)),L.key=a(b,x.value||"");break;case 5:x.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(x)),L.key=l(b,x.value||"");break;case 6:x.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(x)),L.key=u(b,x.value||"");break;default:{r(b,Re.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const M=b.context(),$=s(7,M.offset,M.startLoc);return $.value="",o($,M.offset,M.startLoc),L.key=$,o(L,M.offset,M.startLoc),{nextConsumeToken:x,node:L}}}return o(L,b.currentOffset(),b.currentPosition()),{node:L}}function p(b){const S=b.context(),L=S.currentType===1?b.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,M=s(2,L,x);M.items=[];let $=null;do{const U=$||b.nextToken();switch($=null,U.type){case 0:U.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(U)),M.items.push(i(b,U.value||""));break;case 5:U.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(U)),M.items.push(l(b,U.value||""));break;case 4:U.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(U)),M.items.push(a(b,U.value||""));break;case 6:U.value==null&&r(b,Re.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yt(U)),M.items.push(u(b,U.value||""));break;case 7:{const ee=h(b);M.items.push(ee.node),$=ee.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const R=S.currentType===1?S.lastOffset:b.currentOffset(),G=S.currentType===1?S.lastEndLoc:b.currentPosition();return o(M,R,G),M}function y(b,S,L,x){const M=b.context();let $=x.items.length===0;const R=s(1,S,L);R.cases=[],R.cases.push(x);do{const G=p(b);$||($=G.items.length===0),R.cases.push(G)}while(M.currentType!==13);return $&&r(b,Re.MUST_HAVE_MESSAGES_IN_PLURAL,L,0),o(R,b.currentOffset(),b.currentPosition()),R}function w(b){const S=b.context(),{offset:L,startLoc:x}=S,M=p(b);return S.currentType===13?M:y(b,L,x,M)}function E(b){const S=k0(b,et({},e)),L=S.context(),x=s(0,L.offset,L.startLoc);return t&&x.loc&&(x.loc.source=b),x.body=w(S),e.onCacheKey&&(x.cacheKey=e.onCacheKey(b)),L.currentType!==13&&r(S,Re.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,b[L.offset]||""),o(x,S.currentOffset(),S.currentPosition()),x}return{parse:E}}function Yt(e){if(e.type===13)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function D0(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:o=>(n.helpers.add(o),o)}}function _c(e,t){for(let n=0;n<e.length;n++)Gl(e[n],t)}function Gl(e,t){switch(e.type){case 1:_c(e.cases,t),t.helper("plural");break;case 2:_c(e.items,t);break;case 6:{Gl(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function $0(e,t={}){const n=D0(e);n.helper("normalize"),e.body&&Gl(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function j0(e){const t=e.body;return t.type===2?vc(t):t.cases.forEach(n=>vc(n)),e}function vc(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=Wl(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function Tr(e){switch(e.t=e.type,e.type){case 0:{const t=e;Tr(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let r=0;r<n.length;r++)Tr(n[r]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let r=0;r<n.length;r++)Tr(n[r]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;Tr(t.key),t.k=t.key,delete t.key,t.modifier&&(Tr(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}}delete e.type}function H0(e,t){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:o}=t,i=t.location!==!1,l={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:o,indentLevel:0};i&&e.loc&&(l.source=e.loc.source);const a=()=>l;function u(E,b){l.code+=E}function d(E,b=!0){const S=b?s:"";u(o?S+"  ".repeat(E):S)}function f(E=!0){const b=++l.indentLevel;E&&d(b)}function h(E=!0){const b=--l.indentLevel;E&&d(b)}function p(){d(l.indentLevel)}return{context:a,push:u,indent:f,deindent:h,newline:p,helper:E=>`_${E}`,needIndent:()=>l.needIndent}}function U0(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Xr(e,t.key),t.modifier?(e.push(", "),Xr(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function B0(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const s=t.items.length;for(let o=0;o<s&&(Xr(e,t.items[o]),o!==s-1);o++)e.push(", ");e.deindent(r()),e.push("])")}function V0(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const s=t.cases.length;for(let o=0;o<s&&(Xr(e,t.cases[o]),o!==s-1);o++)e.push(", ");e.deindent(r()),e.push("])")}}function z0(e,t){t.body?Xr(e,t.body):e.push("null")}function Xr(e,t){const{helper:n}=e;switch(t.type){case 0:z0(e,t);break;case 1:V0(e,t);break;case 2:B0(e,t);break;case 6:U0(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const W0=(e,t={})=>{const n=Q(t.mode)?t.mode:"normal",r=Q(t.filename)?t.filename:"message.intl",s=!!t.sourceMap,o=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
 `, i=t.needIndent?t.needIndent:n !=="arrow", l=e.helpers||[], a=H0(e, {
        mode:n, filename:r, sourceMap:s, breakLineCode:o, needIndent:i

    }); a.push(n==="normal" ?"function __msg__ (ctx) {":"(ctx) => {"), a.indent(i), l.length>0&&(a.push(`const {
            $ {
                Wl(l.map(f=>`$ {
                            f
                        }

                        : _$ {
                            f
                        }

                        `), ", ")
            }
        }

        =ctx`), a.newline()), a.push("return "), Xr(a, e), a.deindent(i), a.push("}"), delete e.helpers; const {
    code:u, map:d
}

=a.context(); return {
    ast:e, code:u, map:d?d.toJSON():void 0
}
}

; function G0(e, t= {}) {
    const n=et({}

    , t), r= ! !n.jit, s= ! !n.minify, o=n.optimize==null? !0:n.optimize, l=F0(n).parse(e); return r?(o&&j0(l), s&&Tr(l), {
    ast:l, code:""
}):($0(l, n), W0(l, n))
}

/*!
  * core-base v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function K0() {
    typeof __INTLIFY_PROD_DEVTOOLS__ !="boolean" &&(or().__INTLIFY_PROD_DEVTOOLS__= !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !="boolean" &&(or().__INTLIFY_DROP_MESSAGE_COMPILER__= !1)
}

function gi(e) {
    return n=>q0(n, e)
}

function q0(e, t) {
    const n=t.b||t.body; if((n.t||n.type)===1) {
        const r=n, s=r.c||r.cases; return e.plural(s.reduce((o, i)=>[...o, yc(e, i)], []))
    }

    else return yc(e, n)
}

function yc(e, t) {
    const n=t.s||t.static; if(n !=null)return e.type==="text" ?n:e.normalize([n]); {
        const r=(t.i||t.items).reduce((s, o)=>[...s, Hi(e, o)], []); return e.normalize(r)
    }
}

function Hi(e, t) {
    const n=t.t||t.type; switch(n) {
        case 3: {
            const r=t; return r.v||r.value
        }

        case 9: {
            const r=t; return r.v||r.value
        }

        case 4: {
            const r=t; return e.interpolate(e.named(r.k||r.key))
        }

        case 5: {
            const r=t; return e.interpolate(e.list(r.i !=null?r.i:r.index))
        }

        case 6: {
            const r=t, s=r.m||r.modifier; return e.linked(Hi(e, r.k||r.key), s?Hi(e, s):void 0, e.type)
        }

        case 7: {
            const r=t; return r.v||r.value
        }

        case 8: {
            const r=t; return r.v||r.value
        }

        default:throw new Error(`unhandled node type on format message part: $ {
                n
            }

            `)
    }
}

const Q0=e=>e; let ro=Object.create(null); const es=e=>Le(e)&&(e.t===0||e.type===0)&&("b" in e||"body" in e); function J0(e, t= {}) {
    let n= !1; const r=t.onError||C0; return t.onError=s=> {
        n= !0, r(s)
    }

    , {
    ...G0(e, t), detectError:n
}
}

function Y0(e, t) {
    if( !__INTLIFY_DROP_MESSAGE_COMPILER__&&Q(e)) {
        Se(t.warnHtmlMessage)&&t.warnHtmlMessage; const r=(t.onCacheKey||Q0)(e), s=ro[r]; if(s)return s; const {
            ast:o, detectError:i
        }

        =J0(e, {
            ...t, location: !1, jit: !0
        }), l=gi(o); return i?l:ro[r]=l
}

else {
    const n=e.cacheKey; if(n) {
        const r=ro[n]; return r||(ro[n]=gi(e))
    }

    else return gi(e)
}
}

let As=null; function Z0(e) {
    As=e
}

function X0(e, t, n) {
    As&&As.emit("i18n:init", {
        timestamp:Date.now(), i18n:e, version:t, meta:n
    })
}

const eb=tb("function:translate"); function tb(e) {
    return t=>As&&As.emit(e, t)
}

const bn= {
    INVALID_ARGUMENT:x0, INVALID_DATE_ARGUMENT:18, INVALID_ISO_DATE_ARGUMENT:19, NOT_SUPPORT_NON_STRING_MESSAGE:20, NOT_SUPPORT_LOCALE_PROMISE_VALUE:21, NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22, NOT_SUPPORT_LOCALE_TYPE:23
}

, nb=24; function _n(e) {
    return Go(e, null, void 0)
}

function Kl(e, t) {
    return t.locale !=null?wc(t.locale):wc(e.locale)
}

let bi; function wc(e) {
    if(Q(e))return e; if(Fe(e)) {
        if(e.resolvedOnce&&bi !=null)return bi; if(e.constructor.name==="Function") {
            const t=e(); if(y0(t))throw _n(bn.NOT_SUPPORT_LOCALE_PROMISE_VALUE); return bi=t
        }

        else throw _n(bn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    }

    else throw _n(bn.NOT_SUPPORT_LOCALE_TYPE)
}

function rb(e, t, n) {
    return[...new Set([n, ...Ue(t)?t:Le(t)?Object.keys(t):Q(t)?[t]:[n]])]
}

function mf(e, t, n) {
    const r=Q(n)?n:Rs, s=e; s.__localeChainCache||(s.__localeChainCache=new Map); let o=s.__localeChainCache.get(r); if( !o) {
        o=[]; let i=[n]; for(; Ue(i); )i=Ec(o, i, t); const l=Ue(t)|| !de(t)?t:t.default?t.default:null; i=Q(l)?[l]:l, Ue(i)&&Ec(o, i, !1), s.__localeChainCache.set(r, o)
    }

    return o
}

function Ec(e, t, n) {
    let r= !0; for(let s=0; s<t.length&&Se(r); s++) {
        const o=t[s]; Q(o)&&(r=sb(e, t[s], n))
    }

    return r
}

function sb(e, t, n) {
    let r; const s=t.split("-"); do {
        const o=s.join("-"); r=ob(e, o, n), s.splice(-1, 1)
    }

    while(s.length&&r=== !0); return r
}

function ob(e, t, n) {
    let r= !1; if( !e.includes(t)&&(r= !0, t)) {
        r=t[t.length-1] !=="!"; const s=t.replace(/ !/g, ""); e.push(s), (Ue(n)||de(n))&&n[s]&&(r=n[s])
    }

    return r
}

const Xn=[]; Xn[0]= {
    w:[0], i:[3, 0], "[":[4], o:[7]
}

; Xn[1]= {
    w:[1], ".":[2], "[":[4], o:[7]
}

; Xn[2]= {
    w:[2], i:[3, 0], 0:[3, 0]
}

; Xn[3]= {
    i:[3, 0], 0:[3, 0], w:[1, 1], ".":[2, 1], "[":[4, 1], o:[7, 1]
}

; Xn[4]= {
    "'":[5, 0], '"':[6, 0], "[":[4, 2], "]":[1, 3], o:8, l:[4, 0]
}

; Xn[5]= {
    "'":[4, 0], o:8, l:[5, 0]
}

; Xn[6]= {
    '"':[4, 0], o:8, l:[6, 0]
}

; const ib=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function lb(e){return ib.test(e)}function ab(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function cb(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ub(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:lb(t)?ab(t):"*"+t}function db(e){const t=[];let n=-1,r=0,s=0,o,i,l,a,u,d,f;const h=[];h[0]=()=>{i===void 0?i=l:i+=l},h[1]=()=>{i!==void 0&&(t.push(i),i=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,r=4,h[0]();else{if(s=0,i===void 0||(i=ub(i),i===!1))return!1;h[1]()}};function p(){const y=e[n+1];if(r===5&&y==="' "||r===6&&y==='" ')return n++,l="\\"+y,h[0](),!0}for(;r!==null;)if(n++,o=e[n],!(o==="\\"&&p())){if(a=cb(o),f=Xn[r],u=f[a]||f.l||8,u===8||(r=u[0],u[1]!==void 0&&(d=h[u[1]],d&&(l=o,d()===!1))))return;if(r===7)return t}}const Sc=new Map;function fb(e,t){return Le(e)?e[t]:null}function hb(e,t){if(!Le(e))return null;let n=Sc.get(t);if(n||(n=db(t),n&&Sc.set(t,n)),!n)return null;const r=n.length;let s=e,o=0;for(;o<r;){const i=s[n[o]];if(i===void 0||Fe(s))return null;s=i,o++}return s}const pb="10.0.4",Ko=-1,Rs="en-US",xc="",Cc=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function mb(){return{upper:(e,t)=>t==="text"&&Q(e)?e.toUpperCase():t==="vnode"&&Le(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&Q(e)?e.toLowerCase():t==="vnode"&&Le(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&Q(e)?Cc(e):t==="vnode"&&Le(e)&&"__v_isVNode"in e?Cc(e.children):e}}let gf;function gb(e){gf=e}let bf;function bb(e){bf=e}let _f;function _b(e){_f=e}let vf=null;const vb=e=>{vf=e},yb=()=>vf;let yf=null;const Lc=e=>{yf=e},wb=()=>yf;let Tc=0;function Eb(e={}){const t=Fe(e.onWarn)?e.onWarn:E0,n=Q(e.version)?e.version:pb,r=Q(e.locale)||Fe(e.locale)?e.locale:Rs,s=Fe(r)?Rs:r,o=Ue(e.fallbackLocale)||de(e.fallbackLocale)||Q(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,i=de(e.messages)?e.messages:{[s]:{}},l=de(e.datetimeFormats)?e.datetimeFormats:{[s]:{}},a=de(e.numberFormats)?e.numberFormats:{[s]:{}},u=et({},e.modifiers||{},mb()),d=e.pluralRules||{},f=Fe(e.missing)?e.missing:null,h=Se(e.missingWarn)||Zr(e.missingWarn)?e.missingWarn:!0,p=Se(e.fallbackWarn)||Zr(e.fallbackWarn)?e.fallbackWarn:!0,y=!!e.fallbackFormat,w=!!e.unresolving,E=Fe(e.postTranslation)?e.postTranslation:null,b=de(e.processor)?e.processor:null,S=Se(e.warnHtmlMessage)?e.warnHtmlMessage:!0,L=!!e.escapeParameter,x=Fe(e.messageCompiler)?e.messageCompiler:gf,M=Fe(e.messageResolver)?e.messageResolver:bf||fb,$=Fe(e.localeFallbacker)?e.localeFallbacker:_f||rb,R=Le(e.fallbackContext)?e.fallbackContext:void 0,G=e,U=Le(G.__datetimeFormatters)?G.__datetimeFormatters:new Map,ee=Le(G.__numberFormatters)?G.__numberFormatters:new Map,re=Le(G.__meta)?G.__meta:{};Tc++;const V={version:n,cid:Tc,locale:r,fallbackLocale:o,messages:i,modifiers:u,pluralRules:d,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:y,unresolving:w,postTranslation:E,processor:b,warnHtmlMessage:S,escapeParameter:L,messageCompiler:x,messageResolver:M,localeFallbacker:$,fallbackContext:R,onWarn:t,__meta:re};return V.datetimeFormats=l,V.numberFormats=a,V.__datetimeFormatters=U,V.__numberFormatters=ee,__INTLIFY_PROD_DEVTOOLS__&&X0(V,n,re),V}function ql(e,t,n,r,s){const{missing:o,onWarn:i}=e;if(o!==null){const l=o(e,n,t,s);return Q(l)?l:t}else return t}function cs(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function Sb(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function xb(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(Sb(e,t[r]))return!0;return!1}function Oc(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:o,localeFallbacker:i}=e,{__datetimeFormatters:l}=e,[a,u,d,f]=Ui(...t),h=Se(d.missingWarn)?d.missingWarn:e.missingWarn;Se(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const p=!!d.part,y=Kl(e,d),w=i(e,s,y);if(!Q(a)||a==="")return new Intl.DateTimeFormat(y,f).format(u);let E={},b,S=null;const L="datetime format";for(let $=0;$<w.length&&(b=w[$],E=n[b]||{},S=E[a],!de(S));$++)ql(e,a,b,h,L);if(!de(S)||!Q(b))return r?Ko:a;let x=`${b}__${a}`;Wo(f)||(x=`${x}__${JSON.stringify(f)}`);let M=l.get(x);return M||(M=new Intl.DateTimeFormat(b,et({},S,f)),l.set(x,M)),p?M.formatToParts(u):M.format(u)}const wf=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Ui(...e){const[t,n,r,s]=e,o={};let i={},l;if(Q(t)){const a=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!a)throw _n(bn.INVALID_ISO_DATE_ARGUMENT);const u=a[3]?a[3].trim().startsWith("T")?`${a[1].trim()}${a[3].trim()}`:`${a[1].trim()}T${a[3].trim()}`:a[1].trim();l=new Date(u);try{l.toISOString()}catch{throw _n(bn.INVALID_ISO_DATE_ARGUMENT)}}else if(_0(t)){if(isNaN(t.getTime()))throw _n(bn.INVALID_DATE_ARGUMENT);l=t}else if(Je(t))l=t;else throw _n(bn.INVALID_ARGUMENT);return Q(n)?o.key=n:de(n)&&Object.keys(n).forEach(a=>{wf.includes(a)?i[a]=n[a]:o[a]=n[a]}),Q(r)?o.locale=r:de(r)&&(i=r),de(s)&&(i=s),[o.key||"",l,o,i]}function Ac(e,t,n){const r=e;for(const s in n){const o=`${t}__${s}`;r.__datetimeFormatters.has(o)&&r.__datetimeFormatters.delete(o)}}function Rc(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:o,localeFallbacker:i}=e,{__numberFormatters:l}=e,[a,u,d,f]=Bi(...t),h=Se(d.missingWarn)?d.missingWarn:e.missingWarn;Se(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const p=!!d.part,y=Kl(e,d),w=i(e,s,y);if(!Q(a)||a==="")return new Intl.NumberFormat(y,f).format(u);let E={},b,S=null;const L="number format";for(let $=0;$<w.length&&(b=w[$],E=n[b]||{},S=E[a],!de(S));$++)ql(e,a,b,h,L);if(!de(S)||!Q(b))return r?Ko:a;let x=`${b}__${a}`;Wo(f)||(x=`${x}__${JSON.stringify(f)}`);let M=l.get(x);return M||(M=new Intl.NumberFormat(b,et({},S,f)),l.set(x,M)),p?M.formatToParts(u):M.format(u)}const Ef=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Bi(...e){const[t,n,r,s]=e,o={};let i={};if(!Je(t))throw _n(bn.INVALID_ARGUMENT);const l=t;return Q(n)?o.key=n:de(n)&&Object.keys(n).forEach(a=>{Ef.includes(a)?i[a]=n[a]:o[a]=n[a]}),Q(r)?o.locale=r:de(r)&&(i=r),de(s)&&(i=s),[o.key||"",l,o,i]}function Ic(e,t,n){const r=e;for(const s in n){const o=`${t}__${s}`;r.__numberFormatters.has(o)&&r.__numberFormatters.delete(o)}}const Cb=e=>e,Lb=e=>"",Tb="text",Ob=e=>e.length===0?"":Wl(e),Ab=w0;function kc(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Rb(e){const t=Je(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Je(e.named.count)||Je(e.named.n))?Je(e.named.count)?e.named.count:Je(e.named.n)?e.named.n:t:t}function Ib(e,t){t.count||(t.count=e),t.n||(t.n=e)}function kb(e={}){const t=e.locale,n=Rb(e),r=Le(e.pluralRules)&&Q(t)&&Fe(e.pluralRules[t])?e.pluralRules[t]:kc,s=Le(e.pluralRules)&&Q(t)&&Fe(e.pluralRules[t])?kc:void 0,o=b=>b[r(n,b.length,s)],i=e.list||[],l=b=>i[b],a=e.named||{};Je(e.pluralIndex)&&Ib(n,a);const u=b=>a[b];function d(b,S){const L=Fe(e.messages)?e.messages(b,!!S):Le(e.messages)?e.messages[b]:!1;return L||(e.parent?e.parent.message(b):Lb)}const f=b=>e.modifiers?e.modifiers[b]:Cb,h=de(e.processor)&&Fe(e.processor.normalize)?e.processor.normalize:Ob,p=de(e.processor)&&Fe(e.processor.interpolate)?e.processor.interpolate:Ab,y=de(e.processor)&&Q(e.processor.type)?e.processor.type:Tb,E={list:l,named:u,plural:o,linked:(b,...S)=>{const[L,x]=S;let M="text",$="";S.length===1?Le(L)?($=L.modifier||$,M=L.type||M):Q(L)&&($=L||$):S.length===2&&(Q(L)&&($=L||$),Q(x)&&(M=x||M));const R=d(b,!0)(E),G=M==="vnode"&&Ue(R)&&$?R[0]:R;return $?f($)(G,M):G},message:d,type:y,interpolate:p,normalize:h,values:et({},i,a)};return E}const Mc=()=>"",Ft=e=>Fe(e);function Pc(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:o,fallbackLocale:i,messages:l}=e,[a,u]=Vi(...t),d=Se(u.missingWarn)?u.missingWarn:e.missingWarn,f=Se(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,h=Se(u.escapeParameter)?u.escapeParameter:e.escapeParameter,p=!!u.resolvedMessage,y=Q(u.default)||Se(u.default)?Se(u.default)?o?a:()=>a:u.default:n?o?a:()=>a:null,w=n||y!=null&&(Q(y)||Fe(y)),E=Kl(e,u);h&&Mb(u);let[b,S,L]=p?[a,E,l[E]||{}]:Sf(e,a,E,i,f,d),x=b,M=a;if(!p&&!(Q(x)||es(x)||Ft(x))&&w&&(x=y,M=x),!p&&(!(Q(x)||es(x)||Ft(x))||!Q(S)))return s?Ko:a;let $=!1;const R=()=>{$=!0},G=Ft(x)?x:xf(e,a,S,x,M,R);if($)return x;const U=Fb(e,S,L,u),ee=kb(U),re=Pb(e,G,ee),V=r?r(re,a):re;if(__INTLIFY_PROD_DEVTOOLS__){const le={timestamp:Date.now(),key:Q(a)?a:Ft(x)?x.key:"",locale:S||(Ft(x)?x.locale:""),format:Q(x)?x:Ft(x)?x.source:"",message:V};le.meta=et({},e.__meta,yb()||{}),eb(le)}return V}function Mb(e){Ue(e.list)?e.list=e.list.map(t=>Q(t)?gc(t):t):Le(e.named)&&Object.keys(e.named).forEach(t=>{Q(e.named[t])&&(e.named[t]=gc(e.named[t]))})}function Sf(e,t,n,r,s,o){const{messages:i,onWarn:l,messageResolver:a,localeFallbacker:u}=e,d=u(e,r,n);let f={},h,p=null;const y="translate";for(let w=0;w<d.length&&(h=d[w],f=i[h]||{},(p=a(f,t))===null&&(p=f[t]),!(Q(p)||es(p)||Ft(p)));w++)if(!xb(h,d)){const E=ql(e,t,h,o,y);E!==t&&(p=E)}return[p,h,f]}function xf(e,t,n,r,s,o){const{messageCompiler:i,warnHtmlMessage:l}=e;if(Ft(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||t,u}if(i==null){const u=()=>r;return u.locale=n,u.key=t,u}const a=i(r,Nb(e,n,s,r,l,o));return a.locale=n,a.key=t,a.source=r,a}function Pb(e,t,n){return t(n)}function Vi(...e){const[t,n,r]=e,s={};if(!Q(t)&&!Je(t)&&!Ft(t)&&!es(t))throw _n(bn.INVALID_ARGUMENT);const o=Je(t)?String(t):(Ft(t),t);return Je(n)?s.plural=n:Q(n)?s.default=n:de(n)&&!Wo(n)?s.named=n:Ue(n)&&(s.list=n),Je(r)?s.plural=r:Q(r)?s.default=r:de(r)&&et(s,r),[o,s]}function Nb(e,t,n,r,s,o){return{locale:t,key:n,warnHtmlMessage:s,onError:i=>{throw o&&o(i),i},onCacheKey:i=>g0(t,n,i)}}function Fb(e,t,n,r){const{modifiers:s,pluralRules:o,messageResolver:i,fallbackLocale:l,fallbackWarn:a,missingWarn:u,fallbackContext:d}=e,h={locale:t,modifiers:s,pluralRules:o,messages:(p,y)=>{let w=i(n,p);if(w==null&&(d||y)){const[,,E]=Sf(d||e,p,t,l,a,u);w=i(E,p)}if(Q(w)||es(w)){let E=!1;const S=xf(e,p,t,w,p,()=>{E=!0});return E?Mc:S}else return Ft(w)?w:Mc}};return e.processor&&(h.processor=e.processor),r.list&&(h.list=r.list),r.named&&(h.named=r.named),Je(r.plural)&&(h.pluralIndex=r.plural),h}K0();/*!
 * vue-i18n v10.0.4 * (c) 2024 kazuya kawaguchi * Released under the MIT License. */const Db="10.0.4"; function $b() {
        typeof __VUE_I18N_FULL_INSTALL__ !="boolean" &&(or().__VUE_I18N_FULL_INSTALL__= !0), typeof __VUE_I18N_LEGACY_API__ !="boolean" &&(or().__VUE_I18N_LEGACY_API__= !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !="boolean" &&(or().__INTLIFY_DROP_MESSAGE_COMPILER__= !1), typeof __INTLIFY_PROD_DEVTOOLS__ !="boolean" &&(or().__INTLIFY_PROD_DEVTOOLS__= !1)
    }

    const yt= {
        UNEXPECTED_RETURN_TYPE:nb, INVALID_ARGUMENT:25, MUST_BE_CALL_SETUP_TOP:26, NOT_INSTALLED:27, REQUIRED_VALUE:28, INVALID_VALUE:29, CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30, NOT_INSTALLED_WITH_PROVIDE:31, UNEXPECTED_ERROR:32, NOT_COMPATIBLE_LEGACY_VUE_I18N:33, NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34
    }

    ; function xt(e, ...t) {
        return Go(e, null, void 0)
    }

    const zi=Zn("__translateVNode"), Wi=Zn("__datetimeParts"), Gi=Zn("__numberParts"), Cf=Zn("__setPluralRules"), Lf=Zn("__injectWithOption"), Ki=Zn("__dispose"); function Is(e) {
        if( !Le(e))return e; for(const t in e)if(Co(e, t))if( !t.includes("."))Le(e[t])&&Is(e[t]); else {
            const n=t.split("."), r=n.length-1; let s=e, o= !1; for(let i=0; i<r; i++) {
                if(n[i]in s||(s[n[i]]= {}), !Le(s[n[i]])) {
                    o= !0; break
                }

                s=s[n[i]]
            }

            o||(s[n[r]]=e[t], delete e[t]), Le(s[n[r]])&&Is(s[n[r]])
        }

        return e
    }

    function Ql(e, t) {
        const {
            messages:n, __i18n:r, messageResolver:s, flatJson:o
        }

        =t, i=de(n)?n:Ue(r)? {}

        : {
            [e]: {}
        }

        ; if(Ue(r)&&r.forEach(l=> {
                    if("locale" in l&&"resource" in l) {
                        const {
                            locale:a, resource:u
                        }

                        =l; a?(i[a]=i[a]|| {}

                            , fo(u, i[a])):fo(u, i)
                    }

                    else Q(l)&&fo(JSON.parse(l), i)
                }), s==null&&o)for(const l in i)Co(i, l)&&Is(i[l]); return i
    }

    function Tf(e) {
        return e.type
    }

    function Of(e, t, n) {
        let r=Le(t.messages)?t.messages: {}

        ; "__i18nGlobal" in n&&(r=Ql(e.locale.value, {
                messages:r, __i18n:n.__i18nGlobal

            })); const s=Object.keys(r); s.length&&s.forEach(o=> {
            e.mergeLocaleMessage(o, r[o])

        }); {
        if(Le(t.datetimeFormats)) {
            const o=Object.keys(t.datetimeFormats); o.length&&o.forEach(i=> {
                    e.mergeDateTimeFormat(i, t.datetimeFormats[i])
                })
        }

        if(Le(t.numberFormats)) {
            const o=Object.keys(t.numberFormats); o.length&&o.forEach(i=> {
                    e.mergeNumberFormat(i, t.numberFormats[i])
                })
        }
    }
}

function Nc(e) {
    return B(Us, null, e, 0)
}

const Fc="__INTLIFY_META__", Dc=()=>[], jb=()=> !1; let $c=0; function jc(e) {
    return(t, n, r, s)=>e(n, r, En()||void 0, s)
}

const Hb=()=> {
    const e=En(); let t=null; return e&&(t=Tf(e)[Fc])? {
        [Fc]:t
    }

    :null
}

; function Jl(e= {}) {
    const {
        __root:t, __injectWithOption:n
    }

    =e, r=t===void 0, s=e.flatJson, o=xo?ne:td; let i=Se(e.inheritLocale)?e.inheritLocale: !0; const l=o(t&&i?t.locale.value:Q(e.locale)?e.locale:Rs), a=o(t&&i?t.fallbackLocale.value:Q(e.fallbackLocale)||Ue(e.fallbackLocale)||de(e.fallbackLocale)||e.fallbackLocale=== !1?e.fallbackLocale:l.value), u=o(Ql(l.value, e)), d=o(de(e.datetimeFormats)?e.datetimeFormats: {
            [l.value]: {}

        }), f=o(de(e.numberFormats)?e.numberFormats: {
            [l.value]: {}

        }); let h=t?t.missingWarn:Se(e.missingWarn)||Zr(e.missingWarn)?e.missingWarn: !0, p=t?t.fallbackWarn:Se(e.fallbackWarn)||Zr(e.fallbackWarn)?e.fallbackWarn: !0, y=t?t.fallbackRoot:Se(e.fallbackRoot)?e.fallbackRoot: !0, w= ! !e.fallbackFormat, E=Fe(e.missing)?e.missing:null, b=Fe(e.missing)?jc(e.missing):null, S=Fe(e.postTranslation)?e.postTranslation:null, L=t?t.warnHtmlMessage:Se(e.warnHtmlMessage)?e.warnHtmlMessage: !0, x= ! !e.escapeParameter; const M=t?t.modifiers:de(e.modifiers)?e.modifiers: {}

    ; let $=e.pluralRules||t&&t.pluralRules, R; R=(()=> {
            r&&Lc(null); const C= {
                version:Db, locale:l.value, fallbackLocale:a.value, messages:u.value, modifiers:M, pluralRules:$, missing:b===null?void 0:b, missingWarn:h, fallbackWarn:p, fallbackFormat:w, unresolving: !0, postTranslation:S===null?void 0:S, warnHtmlMessage:L, escapeParameter:x, messageResolver:e.messageResolver, messageCompiler:e.messageCompiler, __meta: {
                    framework:"vue"
                }
            }

            ; C.datetimeFormats=d.value, C.numberFormats=f.value, C.__datetimeFormatters=de(R)?R.__datetimeFormatters:void 0, C.__numberFormatters=de(R)?R.__numberFormatters:void 0; const I=Eb(C); return r&&Lc(I), I

        })(), cs(R, l.value, a.value); function U() {
        return[l.value, a.value, u.value, d.value, f.value]
    }

    const ee=xe({
        get:()=>l.value, set:C=> {
            l.value=C, R.locale=l.value
        }

    }), re=xe({
    get:()=>a.value, set:C=> {
        a.value=C, R.fallbackLocale=a.value, cs(R, l.value, C)
    }

}), V=xe(()=>u.value), le=xe(()=>d.value), Me=xe(()=>f.value); function ot() {
    return Fe(S)?S:null
}

function Ie(C) {
    S=C, R.postTranslation=C
}

function ge() {
    return E
}

function he(C) {
    C !==null&&(b=jc(C)), E=C, R.missing=b
}

const je=(C, I, q, te, ve, ye)=> {
    U(); let ze; try {
        __INTLIFY_PROD_DEVTOOLS__, r||(R.fallbackContext=t?wb():void 0), ze=C(R)
    }

    finally {
        __INTLIFY_PROD_DEVTOOLS__, r||(R.fallbackContext=void 0)
    }

    if(q !=="translate exists" &&Je(ze)&&ze===Ko||q==="translate exists" && !ze) {
        const[rt, kt]=I(); return t&&y?te(t):ve(rt)
    }

    else {
        if(ye(ze))return ze; throw xt(yt.UNEXPECTED_RETURN_TYPE)
    }
}

; function it(...C) {
    return je(I=>Reflect.apply(Pc, null, [I, ...C]), ()=>Vi(...C), "translate", I=>Reflect.apply(I.t, I, [...C]), I=>I, I=>Q(I))
}

function tt(...C) {
    const[I, q, te]=C; if(te&& !Le(te))throw xt(yt.INVALID_ARGUMENT); return it(I, q, et({
            resolvedMessage: !0
        }

        , te|| {}))
}

function Pe(...C) {
    return je(I=>Reflect.apply(Oc, null, [I, ...C]), ()=>Ui(...C), "datetime format", I=>Reflect.apply(I.d, I, [...C]), ()=>xc, I=>Q(I))
}

function nt(...C) {
    return je(I=>Reflect.apply(Rc, null, [I, ...C]), ()=>Bi(...C), "number format", I=>Reflect.apply(I.n, I, [...C]), ()=>xc, I=>Q(I))
}

function ft(C) {
    return C.map(I=>Q(I)||Je(I)||Se(I)?Nc(String(I)):I)
}

const qe= {
    normalize:ft, interpolate:C=>C, type:"vnode"
}

; function H(...C) {
    return je(I=> {
            let q; const te=I; try {
                te.processor=qe, q=Reflect.apply(Pc, null, [te, ...C])
            }

            finally {
                te.processor=null
            }

            return q
        }

        , ()=>Vi(...C), "translate", I=>I[zi](...C), I=>[Nc(I)], I=>Ue(I))
}

function K(...C) {
    return je(I=>Reflect.apply(Rc, null, [I, ...C]), ()=>Bi(...C), "number format", I=>I[Gi](...C), Dc, I=>Q(I)||Ue(I))
}

function W(...C) {
    return je(I=>Reflect.apply(Oc, null, [I, ...C]), ()=>Ui(...C), "datetime format", I=>I[Wi](...C), Dc, I=>Q(I)||Ue(I))
}

function Y(C) {
    $=C, R.pluralRules=$
}

function pe(C, I) {
    return je(()=> {
            if( !C)return !1; const q=Q(I)?I:l.value, te=g(q), ve=R.messageResolver(te, C); return es(ve)||Ft(ve)||Q(ve)
        }

        , ()=>[C], "translate exists", q=>Reflect.apply(q.te, q, [C, I]), jb, q=>Se(q))
}

function Ce(C) {
    let I=null; const q=mf(R, a.value, l.value); for(let te=0; te<q.length; te++) {
        const ve=u.value[q[te]]|| {}

        , ye=R.messageResolver(ve, C); if(ye !=null) {
            I=ye; break
        }
    }

    return I
}

function _(C) {
    const I=Ce(C); return I??(t?t.tm(C)|| {}

        : {})
}

function g(C) {
    return u.value[C]|| {}
}

function A(C, I) {
    if(s) {
        const q= {
            [C]:I
        }

        ; for(const te in q)Co(q, te)&&Is(q[te]); I=q[C]
    }

    u.value[C]=I, R.messages=u.value
}

function D(C, I) {
    u.value[C]=u.value[C]|| {}

    ; const q= {
        [C]:I
    }

    ; if(s)for(const te in q)Co(q, te)&&Is(q[te]); I=q[C], fo(I, u.value[C]), R.messages=u.value
}

function N(C) {
    return d.value[C]|| {}
}

function m(C, I) {
    d.value[C]=I, R.datetimeFormats=d.value, Ac(R, C, I)
}

function v(C, I) {
    d.value[C]=et(d.value[C]|| {}

        , I), R.datetimeFormats=d.value, Ac(R, C, I)
}

function O(C) {
    return f.value[C]|| {}
}

function k(C, I) {
    f.value[C]=I, R.numberFormats=f.value, Ic(R, C, I)
}

function j(C, I) {
    f.value[C]=et(f.value[C]|| {}

        , I), R.numberFormats=f.value, Ic(R, C, I)
}

$c++, t&&xo&&(Ze(t.locale, C=> {
            i&&(l.value=C, R.locale=C, cs(R, l.value, a.value))

        }), Ze(t.fallbackLocale, C=> {
            i&&(a.value=C, R.fallbackLocale=C, cs(R, l.value, a.value))

        })); const z= {
    id:$c, locale:ee, fallbackLocale:re, get inheritLocale() {
        return i
    }

    , set inheritLocale(C) {
        i=C, C&&t&&(l.value=t.locale.value, a.value=t.fallbackLocale.value, cs(R, l.value, a.value))
    }

    , get availableLocales() {
        return Object.keys(u.value).sort()
    }

    , messages:V, get modifiers() {
        return M
    }

    , get pluralRules() {
        return $|| {}
    }

    , get isGlobal() {
        return r
    }

    , get missingWarn() {
        return h
    }

    , set missingWarn(C) {
        h=C, R.missingWarn=h
    }

    , get fallbackWarn() {
        return p
    }

    , set fallbackWarn(C) {
        p=C, R.fallbackWarn=p
    }

    , get fallbackRoot() {
        return y
    }

    , set fallbackRoot(C) {
        y=C
    }

    , get fallbackFormat() {
        return w
    }

    , set fallbackFormat(C) {
        w=C, R.fallbackFormat=w
    }

    , get warnHtmlMessage() {
        return L
    }

    , set warnHtmlMessage(C) {
        L=C, R.warnHtmlMessage=C
    }

    , get escapeParameter() {
        return x
    }

    , set escapeParameter(C) {
        x=C, R.escapeParameter=C
    }

    , t:it, getLocaleMessage:g, setLocaleMessage:A, mergeLocaleMessage:D, getPostTranslationHandler:ot, setPostTranslationHandler:Ie, getMissingHandler:ge, setMissingHandler:he, [Cf]:Y
}

; return z.datetimeFormats=le, z.numberFormats=Me, z.rt=tt, z.te=pe, z.tm=_, z.d=Pe, z.n=nt, z.getDateTimeFormat=N, z.setDateTimeFormat=m, z.mergeDateTimeFormat=v, z.getNumberFormat=O, z.setNumberFormat=k, z.mergeNumberFormat=j, z[Lf]=n, z[zi]=H, z[Wi]=W, z[Gi]=K, z
}

function Ub(e) {
    const t=Q(e.locale)?e.locale:Rs, n=Q(e.fallbackLocale)||Ue(e.fallbackLocale)||de(e.fallbackLocale)||e.fallbackLocale=== !1?e.fallbackLocale:t, r=Fe(e.missing)?e.missing:void 0, s=Se(e.silentTranslationWarn)||Zr(e.silentTranslationWarn)? !e.silentTranslationWarn: !0, o=Se(e.silentFallbackWarn)||Zr(e.silentFallbackWarn)? !e.silentFallbackWarn: !0, i=Se(e.fallbackRoot)?e.fallbackRoot: !0, l= ! !e.formatFallbackMessages, a=de(e.modifiers)?e.modifiers: {}

    , u=e.pluralizationRules, d=Fe(e.postTranslation)?e.postTranslation:void 0, f=Q(e.warnHtmlInMessage)?e.warnHtmlInMessage !=="off": !0, h= ! !e.escapeParameterHtml, p=Se(e.sync)?e.sync: !0; let y=e.messages; if(de(e.sharedMessages)) {
        const M=e.sharedMessages; y=Object.keys(M).reduce((R, G)=> {
                const U=R[G]||(R[G]= {}); return et(U, M[G]), R
            }

            , y|| {})
    }

    const {
        __i18n:w, __root:E, __injectWithOption:b
    }

    =e, S=e.datetimeFormats, L=e.numberFormats, x=e.flatJson; return {
        locale:t, fallbackLocale:n, messages:y, flatJson:x, datetimeFormats:S, numberFormats:L, missing:r, missingWarn:s, fallbackWarn:o, fallbackRoot:i, fallbackFormat:l, modifiers:a, pluralRules:u, postTranslation:d, warnHtmlMessage:f, escapeParameter:h, messageResolver:e.messageResolver, inheritLocale:p, __i18n:w, __root:E, __injectWithOption:b
    }
}

function qi(e= {}) {
    const t=Jl(Ub(e)), {
    __extender:n
}

=e, r= {
    id:t.id, get locale() {
        return t.locale.value
    }

    , set locale(s) {
        t.locale.value=s
    }

    , get fallbackLocale() {
        return t.fallbackLocale.value
    }

    , set fallbackLocale(s) {
        t.fallbackLocale.value=s
    }

    , get messages() {
        return t.messages.value
    }

    , get datetimeFormats() {
        return t.datetimeFormats.value
    }

    , get numberFormats() {
        return t.numberFormats.value
    }

    , get availableLocales() {
        return t.availableLocales
    }

    , get missing() {
        return t.getMissingHandler()
    }

    , set missing(s) {
        t.setMissingHandler(s)
    }

    , get silentTranslationWarn() {
        return Se(t.missingWarn)? !t.missingWarn:t.missingWarn
    }

    , set silentTranslationWarn(s) {
        t.missingWarn=Se(s)? !s:s
    }

    , get silentFallbackWarn() {
        return Se(t.fallbackWarn)? !t.fallbackWarn:t.fallbackWarn
    }

    , set silentFallbackWarn(s) {
        t.fallbackWarn=Se(s)? !s:s
    }

    , get modifiers() {
        return t.modifiers
    }

    , get formatFallbackMessages() {
        return t.fallbackFormat
    }

    , set formatFallbackMessages(s) {
        t.fallbackFormat=s
    }

    , get postTranslation() {
        return t.getPostTranslationHandler()
    }

    , set postTranslation(s) {
        t.setPostTranslationHandler(s)
    }

    , get sync() {
        return t.inheritLocale
    }

    , set sync(s) {
        t.inheritLocale=s
    }

    , get warnHtmlInMessage() {
        return t.warnHtmlMessage?"warn":"off"
    }

    , set warnHtmlInMessage(s) {
        t.warnHtmlMessage=s !=="off"
    }

    , get escapeParameterHtml() {
        return t.escapeParameter
    }

    , set escapeParameterHtml(s) {
        t.escapeParameter=s
    }

    , get pluralizationRules() {
        return t.pluralRules|| {}
    }

    , __composer:t, t(...s) {
        return Reflect.apply(t.t, t, [...s])
    }

    , rt(...s) {
        return Reflect.apply(t.rt, t, [...s])
    }

    , tc(...s) {
        const[o, i, l]=s, a= {
            plural:1
        }

        ; let u=null, d=null; if( !Q(o))throw xt(yt.INVALID_ARGUMENT); const f=o; return Q(i)?a.locale=i:Je(i)?a.plural=i:Ue(i)?u=i:de(i)&&(d=i), Q(l)?a.locale=l:Ue(l)?u=l:de(l)&&(d=l), Reflect.apply(t.t, t, [f, u||d|| {}

            , a])
    }

    , te(s, o) {
        return t.te(s, o)
    }

    , tm(s) {
        return t.tm(s)
    }

    , getLocaleMessage(s) {
        return t.getLocaleMessage(s)
    }

    , setLocaleMessage(s, o) {
        t.setLocaleMessage(s, o)
    }

    , mergeLocaleMessage(s, o) {
        t.mergeLocaleMessage(s, o)
    }

    , d(...s) {
        return Reflect.apply(t.d, t, [...s])
    }

    , getDateTimeFormat(s) {
        return t.getDateTimeFormat(s)
    }

    , setDateTimeFormat(s, o) {
        t.setDateTimeFormat(s, o)
    }

    , mergeDateTimeFormat(s, o) {
        t.mergeDateTimeFormat(s, o)
    }

    , n(...s) {
        return Reflect.apply(t.n, t, [...s])
    }

    , getNumberFormat(s) {
        return t.getNumberFormat(s)
    }

    , setNumberFormat(s, o) {
        t.setNumberFormat(s, o)
    }

    , mergeNumberFormat(s, o) {
        t.mergeNumberFormat(s, o)
    }
}

; return r.__extender=n, r
}

function Bb(e, t, n) {
    return {
        beforeCreate() {
            const r=En(); if( !r)throw xt(yt.UNEXPECTED_ERROR); const s=this.$options; if(s.i18n) {
                const o=s.i18n; if(s.__i18n&&(o.__i18n=s.__i18n), o.__root=t, this===this.$root)this.$i18n=Hc(e, o); else {
                    o.__injectWithOption= !0, o.__extender=n.__vueI18nExtend, this.$i18n=qi(o); const i=this.$i18n; i.__extender&&(i.__disposer=i.__extender(this.$i18n))
                }
            }

            else if(s.__i18n)if(this===this.$root)this.$i18n=Hc(e, s); else {
                this.$i18n=qi({
                    __i18n:s.__i18n, __injectWithOption: !0, __extender:n.__vueI18nExtend, __root:t
                }); const o=this.$i18n; o.__extender&&(o.__disposer=o.__extender(this.$i18n))
        }

        else this.$i18n=e; s.__i18nGlobal&&Of(t, s, s), this.$t=(...o)=>this.$i18n.t(...o), this.$rt=(...o)=>this.$i18n.rt(...o), this.$tc=(...o)=>this.$i18n.tc(...o), this.$te=(o, i)=>this.$i18n.te(o, i), this.$d=(...o)=>this.$i18n.d(...o), this.$n=(...o)=>this.$i18n.n(...o), this.$tm=o=>this.$i18n.tm(o), n.__setInstance(r, this.$i18n)
    }

    , mounted() {}

    , unmounted() {
        const r=En(); if( !r)throw xt(yt.UNEXPECTED_ERROR); const s=this.$i18n; delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer&&(s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n
    }
}
}

function Hc(e, t) {
    e.locale=t.locale||e.locale, e.fallbackLocale=t.fallbackLocale||e.fallbackLocale, e.missing=t.missing||e.missing, e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn, e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn, e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages, e.postTranslation=t.postTranslation||e.postTranslation, e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage, e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml, e.sync=t.sync||e.sync, e.__composer[Cf](t.pluralizationRules||e.pluralizationRules); const n=Ql(e.locale, {
        messages:t.messages, __i18n:t.__i18n
    }); return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r, n[r])), t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r, t.numberFormats[r])), e
}

const Yl= {
    tag: {
        type:[String, Object]
    }

    , locale: {
        type:String
    }

    , scope: {
        type:String, validator:e=>e==="parent" ||e==="global", default:"parent"
    }

    , i18n: {
        type:Object
    }
}

; function Vb({
    slots:e
}

, t) {
    return t.length===1&&t[0]==="default" ?(e.default?e.default():[]).reduce((r, s)=>[...r, ...s.type===we?s.children:[s]], []):t.reduce((n, r)=> {
            const s=e[r]; return s&&(n[r]=s()), n
        }

        , {})
}

function Af() {
    return we
}

const zb=Jn({
    name:"i18n-t", props:et({
        keypath: {
            type:String, required: !0
        }

        , plural: {
            type:[Number, String], validator:e=>Je(e)|| !isNaN(e)
        }
    }

    , Yl), setup(e, t) {
    const {
        slots:n, attrs:r
    }

    =t, s=e.i18n||Cn({
        useScope:e.scope, __useComponent: !0

    }); return()=> {
    const o=Object.keys(n).filter(f=>f !=="_"), i= {}

    ; e.locale&&(i.locale=e.locale), e.plural !==void 0&&(i.plural=Q(e.plural)?+e.plural:e.plural); const l=Vb(t, o), a=s[zi](e.keypath, l, i), u=et({}

    , r), d=Q(e.tag)||Le(e.tag)?e.tag:Af(); return Be(d, u, a)
}
}

}), Uc=zb; function Wb(e) {
    return Ue(e)&& !Q(e[0])
}

function Rf(e, t, n, r) {
    const {
        slots:s, attrs:o
    }

    =t; return()=> {
        const i= {
            part: !0
        }

        ; let l= {}

        ; e.locale&&(i.locale=e.locale), Q(e.format)?i.key=e.format:Le(e.format)&&(Q(e.format.key)&&(i.key=e.format.key), l=Object.keys(e.format).reduce((h, p)=>n.includes(p)?et({}

                , h, {
                [p]:e.format[p]

            }):h, {})); const a=r(e.value, i, l); let u=[i.key]; Ue(a)?u=a.map((h, p)=> {
        const y=s[h.type], w=y?y({
            [h.type]:h.value, index:p, parts:a

        }):[h.value]; return Wb(w)&&(w[0].key=`$ {
            h.type
        }

        -$ {
            p
        }

        `), w

}):Q(a)&&(u=[a]); const d=et({}

, o), f=Q(e.tag)||Le(e.tag)?e.tag:Af(); return Be(f, d, u)
}
}

const Gb=Jn({
    name:"i18n-n", props:et({
        value: {
            type:Number, required: !0
        }

        , format: {
            type:[String, Object]
        }
    }

    , Yl), setup(e, t) {
    const n=e.i18n||Cn({
        useScope:e.scope, __useComponent: !0
    }); return Rf(e, t, Ef, (...r)=>n[Gi](...r))
}

}), Bc=Gb, Kb=Jn({
    name:"i18n-d", props:et({
        value: {
            type:[Number, Date], required: !0
        }

        , format: {
            type:[String, Object]
        }
    }

    , Yl), setup(e, t) {
    const n=e.i18n||Cn({
        useScope:e.scope, __useComponent: !0
    }); return Rf(e, t, wf, (...r)=>n[Wi](...r))
}

}), Vc=Kb; function qb(e, t) {
    const n=e; if(e.mode==="composition")return n.__getInstance(t)||e.global; {
        const r=n.__getInstance(t); return r !=null?r.__composer:e.global.__composer
    }
}

function Qb(e) {
    const t=i=> {
        const {
            instance:l, value:a
        }

        =i; if( !l|| !l.$)throw xt(yt.UNEXPECTED_ERROR); const u=qb(e, l.$), d=zc(a); return[Reflect.apply(u.t, u, [...Wc(d)]), u]
    }

    ; return {
        created:(i, l)=> {
            const[a, u]=t(l); xo&&e.global===u&&(i.__i18nWatcher=Ze(u.locale, ()=> {
                        l.instance&&l.instance.$forceUpdate()
                    })), i.__composer=u, i.textContent=a
        }

        , unmounted:i=> {
            xo&&i.__i18nWatcher&&(i.__i18nWatcher(), i.__i18nWatcher=void 0, delete i.__i18nWatcher), i.__composer&&(i.__composer=void 0, delete i.__composer)
        }

        , beforeUpdate:(i, {
            value:l

        })=> {
        if(i.__composer) {
            const a=i.__composer, u=zc(l); i.textContent=Reflect.apply(a.t, a, [...Wc(u)])
        }
    }

    , getSSRProps:i=> {
        const[l]=t(i); return {
            textContent:l
        }
    }
}
}

function zc(e) {
    if(Q(e))return {
        path:e
    }

    ; if(de(e)) {
        if( !("path" in e))throw xt(yt.REQUIRED_VALUE, "path"); return e
    }

    else throw xt(yt.INVALID_VALUE)
}

function Wc(e) {
    const {
        path:t, locale:n, args:r, choice:s, plural:o
    }

    =e, i= {}

    , l=r|| {}

    ; return Q(n)&&(i.locale=n), Je(s)&&(i.plural=s), Je(o)&&(i.plural=o), [t, l, i]
}

function Jb(e, t, ...n) {
    const r=de(n[0])?n[0]: {}

    ; (Se(r.globalInstall)?r.globalInstall: !0)&&([Uc.name, "I18nT"].forEach(o=>e.component(o, Uc)), [Bc.name, "I18nN"].forEach(o=>e.component(o, Bc)), [Vc.name, "I18nD"].forEach(o=>e.component(o, Vc))), e.directive("t", Qb(t))
}

const Yb=Zn("global-vue-i18n"); function Zb(e= {}

    , t) {
    const n=__VUE_I18N_LEGACY_API__&&Se(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__, r=Se(e.globalInjection)?e.globalInjection: !0, s=new Map, [o, i]=Xb(e, n), l=Zn(""); function a(h) {
        return s.get(h)||null
    }

    function u(h, p) {
        s.set(h, p)
    }

    function d(h) {
        s.delete(h)
    }

    const f= {
        get mode() {
            return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"
        }

        , async install(h, ...p) {
            if(h.__VUE_I18N_SYMBOL__=l, h.provide(h.__VUE_I18N_SYMBOL__, f), de(p[0])) {
                const E=p[0]; f.__composerExtend=E.__composerExtend, f.__vueI18nExtend=E.__vueI18nExtend
            }

            let y=null; !n&&r&&(y=l_(h, f.global)), __VUE_I18N_FULL_INSTALL__&&Jb(h, f, ...p), __VUE_I18N_LEGACY_API__&&n&&h.mixin(Bb(i, i.__composer, f)); const w=h.unmount; h.unmount=()=> {
                y&&y(), f.dispose(), w()
            }
        }

        , get global() {
            return i
        }

        , dispose() {
            o.stop()
        }

        , __instances:s, __getInstance:a, __setInstance:u, __deleteInstance:d
    }

    ; return f
}

function Cn(e= {}) {
    const t=En(); if(t==null)throw xt(yt.MUST_BE_CALL_SETUP_TOP); if( !t.isCE&&t.appContext.app !=null&& !t.appContext.app.__VUE_I18N_SYMBOL__)throw xt(yt.NOT_INSTALLED); const n=e_(t), r=n_(n), s=Tf(t), o=t_(e, s); if(o==="global")return Of(r, e, s), r; if(o==="parent") {
        let a=r_(n, t, e.__useComponent); return a==null&&(a=r), a
    }

    const i=n; let l=i.__getInstance(t); if(l==null) {
        const a=et({}

        , e); "__i18n" in s&&(a.__i18n=s.__i18n), r&&(a.__root=r), l=Jl(a), i.__composerExtend&&(l[Ki]=i.__composerExtend(l)), o_(i, t, l), i.__setInstance(t, l)
}

return l
}

function Xb(e, t, n) {
    const r=Ah(), s=__VUE_I18N_LEGACY_API__&&t?r.run(()=>qi(e)):r.run(()=>Jl(e)); if(s==null)throw xt(yt.UNEXPECTED_ERROR); return[r, s]
}

function e_(e) {
    const t=$e(e.isCE?Yb:e.appContext.app.__VUE_I18N_SYMBOL__); if( !t)throw xt(e.isCE?yt.NOT_INSTALLED_WITH_PROVIDE:yt.UNEXPECTED_ERROR); return t
}

function t_(e, t) {
    return Wo(e)?"__i18n" in t?"local":"global":e.useScope?e.useScope:"local"
}

function n_(e) {
    return e.mode==="composition" ?e.global:e.global.__composer
}

function r_(e, t, n= !1) {
    let r=null; const s=t.root; let o=s_(t, n); for(; o !=null; ) {
        const i=e; if(e.mode==="composition")r=i.__getInstance(o); else if(__VUE_I18N_LEGACY_API__) {
            const l=i.__getInstance(o); l !=null&&(r=l.__composer, n&&r&& !r[Lf]&&(r=null))
        }

        if(r !=null||s===o)break; o=o.parent
    }

    return r
}

function s_(e, t= !1) {
    return e==null?null:t&&e.vnode.ctx||e.parent
}

function o_(e, t, n) {
    Yn(()=> {}

        , t), $o(()=> {
            const r=n; e.__deleteInstance(t); const s=r[Ki]; s&&(s(), delete r[Ki])
        }

        , t)
}

const i_=["locale", "fallbackLocale", "availableLocales"], Gc=["t", "rt", "d", "n", "tm", "te"]; function l_(e, t) {
    const n=Object.create(null); return i_.forEach(s=> {
            const o=Object.getOwnPropertyDescriptor(t, s); if( !o)throw xt(yt.UNEXPECTED_ERROR); const i=We(o.value)? {
                get() {
                    return o.value.value
                }

                , set(l) {
                    o.value.value=l
                }
            }

            : {
                get() {
                    return o.get&&o.get()
                }
            }

            ; Object.defineProperty(n, s, i)

        }), e.config.globalProperties.$i18n=n, Gc.forEach(s=> {
            const o=Object.getOwnPropertyDescriptor(t, s); if( !o|| !o.value)throw xt(yt.UNEXPECTED_ERROR); Object.defineProperty(e.config.globalProperties, `$$ {
                    s
                }

                `, o)

        }), ()=> {
        delete e.config.globalProperties.$i18n, Gc.forEach(s=> {
                delete e.config.globalProperties[`$$ {
                    s
                }

                `]
            })
    }
}

$b(); gb(Y0); bb(hb); _b(mf); if(__INTLIFY_PROD_DEVTOOLS__) {
    const e=or(); e.__INTLIFY__= !0, Z0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}

const a_= {
    class:"fixed z-[999] inset-0 flex items-center justify-center overflow-hidden"
}

, c_= {
    __name:"Modal", props: {
        id: {
            type:String, defualt:"exampleModal"
        }

        , open: {
            type:Boolean, defualt: !1
        }

        , class: {
            type:String, defualt:""
        }
    }

    , emits:"close", setup(e, {
        emit:t

    }) {
    const n=e, r=t, s=ne(null); return zo(s, ()=> {
            n.open&&r("close")

        }), (o, i)=>(J(), Wn(Gn, {
            name:"fade"
        }

        , {
        default:ae(()=>[$t(c("div", a_, [i[1]||(i[1]=c("div", {
                            class:"fixed inset-0 transition-opacity"
                        }

                        , [c("div", {
                            class:"absolute inset-0 bg-zinc-800 opacity-75"

                        })], -1)), c("div", {
                class:sn(["bg-accent rounded-border text-left shadow-xl transform transition-all sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl sm:w-full relative overflow-auto max-h-[95vh]", n.class]), ref_key:"modalConent", ref:s
            }

            , [B(me(hf), {
                class:"absolute right-0 top-0 h-6 w-6 bg-gray-100 hover:bg-gray-400 text-main text-lg rounded-border cursor-pointer m-3 opacity-55", onClick:i[0]||(i[0]=l=>o.$emit("close"))
            }), io(o.$slots, "default")], 2)], 512), [[wn, e.open]])]), _:3
}))
}
}

, u_= {
    class:"text-3xl font-extrabold text-start m-4 uppercase"
}

, d_= {
    class:"grid m-4"
}

, f_= {
    class:"w-full"
}

, h_= {
    class:"inline-flex flex-col justify-center relative text-main w-full"
}

, p_= {
    class:"relative w-full"
}

, m_=["placeholder"], g_= {
    class:"bg-accent border border-gray w-full mt-2"
}

, b_= {
    class:"pl-8 pr-2 py-1 border-b-2 border-gray relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
}

, __= {
    class:"pl-8 pr-2 py-1 border-b-2 border-gray relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
}

, v_= {
    class:"pl-8 pr-2 py-1 border-b-2 border-gray relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
}

, y_= {
    class:"pl-8 pr-2 py-1 border-gray relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
}

, w_= {
    class:"border-b border-b-gray my-6"
}

, E_= {
    class:"-mb-px flex items-center gap-4 text-sm"
}

, S_=["onClick"], x_= {
    class:"mt-6"
}

, C_= {
    key:0
}

, L_= {
    key:1
}

, T_= {
    key:2
}

, O_= {
    __name:"SearchModal", props: {
        open: {
            type:Boolean
        }
    }

    , setup(e) {
        const t=e, {
        t:n
    }

    =Cn(), r=xe(()=>[n("search.tabs.0"), n("search.tabs.1"), n("search.tabs.2")]), s=ne(0), o=i=> {
        s.value=i
    }

    ; return(i, l)=>(J(), Wn(c_, {
            open:t.open, onClose:l[0]||(l[0]=a=>i.$emit("close"))
        }

        , {
        default:ae(()=>[c("h1", u_, F(i.$t("search.title")), 1), c("div", d_, [c("div", f_, [c("div", h_, [c("div", p_, [c("input", {
                                type:"text", class:"p-2 w-full pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-accent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent", placeholder:i.$t("search.placeholder"), value:"Gar"
                            }

                            , null, 8, m_), l[1]||(l[1]=c("svg", {
                                class:"w-4 h-4 absolute left-2.5 top-3.5", xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", stroke:"currentColor"
                            }

                            , [c("path", {
                                "stroke-linecap":"round", "stroke-linejoin":"round", "stroke-width":"2", d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"

                            })], -1))]), c("ul", g_, [c("li", b_, [l[2]||(l[2]=c("svg", {
                            class:"absolute w-4 h-4 left-2 top-2", xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 20 20", fill:"currentColor"
                        }

                        , [c("path", {
                            "fill-rule":"evenodd", d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule":"evenodd"

                        })], -1)), c("b", null, F(i.$t("search.locations.0")), 1)]), c("li", __, [l[3]||(l[3]=c("svg", {
                    class:"absolute w-4 h-4 left-2 top-2", xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 20 20", fill:"currentColor"
                }

                , [c("path", {
                    "fill-rule":"evenodd", d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule":"evenodd"

                })], -1)), c("b", null, F(i.$t("search.locations.1")), 1)]), c("li", v_, [l[4]||(l[4]=c("svg", {
            class:"absolute w-4 h-4 left-2 top-2", xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 20 20", fill:"currentColor"
        }

        , [c("path", {
            "fill-rule":"evenodd", d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule":"evenodd"

        })], -1)), c("b", null, F(i.$t("search.locations.2")), 1)]), c("li", y_, [l[5]||(l[5]=c("svg", {
            class:"absolute w-4 h-4 left-2 top-2", xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 20 20", fill:"currentColor"
        }

        , [c("path", {
            "fill-rule":"evenodd", d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z", "clip-rule":"evenodd"

        })], -1)), c("b", null, F(i.$t("search.locations.3")), 1)])])])]), c("div", w_, [c("ul", E_, [(J( !0), X(we, null, yn(r.value, (a, u)=>(J(), X("li", {
                            key:u, class:"flex-1"
                        }

                        , [c("a", {
                            href:"#", onClick:zm(d=>o(u), ["prevent"]), class:sn(["relative flex items-center justify-center gap-2 px-1 py-3 uppercase", s.value===u?"text-blue-700":"text-main hover:text-blue-700", s.value===u&&"after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700"])
                        }

                        , F(a), 11, S_)]))), 128))]), c("div", x_, [s.value===0?(J(), X("div", C_, F(i.$t("search.productsContent")), 1)):Xe("", !0), s.value===1?(J(), X("div", L_, F(i.$t("search.collectionsContent")), 1)):Xe("", !0), s.value===2?(J(), X("div", T_, F(i.$t("search.pagesContent")), 1)):Xe("", !0)])])])]), _:1
}

, 8, ["open"]))
}
}

, A_="/test-piepjackclothing/assets/de_DE-D0Lx7CdH.svg", R_="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060%2030'%20width='1200'%20height='600'%3e%3cclipPath%20id='s'%3e%3cpath%20d='M0,0%20v30%20h60%20v-30%20z'/%3e%3c/clipPath%3e%3cclipPath%20id='t'%3e%3cpath%20d='M30,15%20h30%20v15%20z%20v15%20h-30%20z%20h-30%20v-15%20z%20v-15%20h30%20z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23s)'%3e%3cpath%20d='M0,0%20v30%20h60%20v-30%20z'%20fill='%23012169'/%3e%3cpath%20d='M0,0%20L60,30%20M60,0%20L0,30'%20stroke='%23fff'%20stroke-width='6'/%3e%3cpath%20d='M0,0%20L60,30%20M60,0%20L0,30'%20clip-path='url(%23t)'%20stroke='%23C8102E'%20stroke-width='4'/%3e%3cpath%20d='M30,0%20v30%20M0,15%20h60'%20stroke='%23fff'%20stroke-width='10'/%3e%3cpath%20d='M30,0%20v30%20M0,15%20h60'%20stroke='%23C8102E'%20stroke-width='6'/%3e%3c/g%3e%3c/svg%3e", I_= {
    class:"dropdown-menu w-full flex justify-between gap-2"
}

, k_= {
    __name:"DropdownMenu", props: {
        open: {
            type:Boolean, default: !1
        }

        , toggleButtonClass: {
            type:String, default:""
        }

        , dropdownContentClass: {
            type:String, default:""
        }

        , class: {
            type:String, default:""
        }

        , clear: {
            type:String, default:null
        }

        , save: {
            type:String, default:null
        }

        , leftInt: {
            type:Number, default:50
        }
    }

    , emits:["handle:clear", "handle:save", "close", "toggle"], setup(e, {
        emit:t

    }) {
    const n=e, r=t, s=ne(null), {
    bottom:o, left:i
}

=vg(s); zo(s, ()=> {
        n.open&&r("close")

    }); const l=df("(max-width: 640px)"), a=xe(()=>({
        top:`$ {
            o.value+10
        }

        px`, left:l.value?"150px":`$ {
            i.value-n.leftInt
        }

        px`

    })), u=()=> {
    r("handle:clear")
}

, d=async()=> {
    r("handle:save")
}

; return(f, h)=>(J(), X("div", {
        class:sn(["dropdown relative z-[9] flex", n.class]), ref_key:"dropdownMenu", ref:s
    }

    , [c("button", {
        class:sn(e.toggleButtonClass), onClick:h[0]||(h[0]=p=>f.$emit("toggle"))
    }

    , [io(f.$slots, "toggle")], 2), B(Gn, {
    name:"fade"
}

, {
default:ae(()=>[e.open?(J(), X("div", {
            key:0, style:Kr(a.value), class:sn([e.dropdownContentClass, "table-border-color fixed shadow-lg mx-3 min-w-fit rounded-border-half max-w-xs z-[999] max-h-64 md:max-h-[34rem]"])
        }

        , [io(f.$slots, "default"), c("div", I_, [io(f.$slots, "buttons"), e.clear?(J(), X("button", {
                    key:0, class:sn(e.clear), onClick:u
                }

                , F(f.trans("common.configurator.CLEAR")), 3)):Xe("", !0), e.save?(J(), X("button", {
                key:1, class:sn(e.save), onClick:d
            }

            , F(f.trans("common.configurator.SAVE")), 3)):Xe("", !0)])], 6)):Xe("", !0)]), _:3
})], 2))
}
}

, M_=["src"], P_= {
    __name:"LanguageDropdown", props: {
        open: {
            type:Boolean
        }
    }

    , setup(e) {
        const {
            t, locale:n
        }

        =Cn(), r=i=> {
            Q3(i)
        }

        , s=e, o=xe(()=>`/src/test-piepjackclothing/assets/img/lang/$ {
                n.value==="de" ?"de_DE":"en_GB"
            }

            .svg`); return(i, l)=>(J(), Wn(k_, {
                open:s.open, close:i.$emit("handle:close"), toggle:i.$emit("handle:toggle"), dropdownContentClass:"bg-accent"
            }

            , {
            toggle:ae(()=>[c("img", {
                    class:"h-6 w-6 object-contain hover:opacity-75", src:o.value
                }

                , null, 8, M_)]), default:ae(()=>[me(n) !=="de" ?(J(), X("button", {
                    key:0, onClick:l[0]||(l[0]=a=>r("de")), class:"dropdown-item !rounded-none flex items-center gap-2 text-primary text-decoration-none text-xs p-2 shadow-sm font-bold"
                }

                , l[2]||(l[2]=[c("img", {
                        class:"max-h-5 max-w-8 object-contain", src:A_
                    }

                    , null, -1), c("span", null, F("DE"), -1)]))):Xe("", !0), me(n)==="de" ?(J(), X("button", {
            key:1, onClick:l[1]||(l[1]=a=>r("en")), class:"dropdown-item !rounded-none flex items-center gap-2 text-primary text-decoration-none text-xs p-2 shadow-sm font-bold"
        }

        , l[3]||(l[3]=[c("img", {
                class:"h-4 w-5 object-contain", src:R_
            }

            , null, -1), c("span", null, F("EN"), -1)]))):Xe("", !0)]), _:1
}

, 8, ["open", "close", "toggle"]))
}
}

, N_= {
    class:"banner bg-main text-accent text-xs flex justify-between gap-3 items-center h-14 px-3 md:px-12 flex-row-reverse md:flex-row"
}

, F_=["innerHTML"], D_= {
    __name:"TopBanner", setup(e) {
        const {
            t
        }

        =Cn(), n=ne({
            days:4, hours:20, minutes:59

        }), r=df("(max-width: 640px)"), s=xe(()=>t("header.countdown", {
            days:n.value.days, hours:n.value.hours, minutes:n.value.minutes

        })); return(o, i)=> {
    const l=Kt("router-link"); return J(), X("div", N_, [c("div", {
            class:"flex justify-between items-center w-full grow flex-col md:flex-row sale-text-banner", style:Kr(me(r)&& {
                    fontSize:"0.45em"
                })
        }

        , [c("span", {
            innerHTML:o.$t("header.readyForDrop")
        }

        , null, 8, F_), c("span", null, F(o.$t("header.newCollectionDropsIn")), 1), c("span", null, F(s.value), 1)], 4), B(l, {
    to:"/off-the-radar"
}

, {
default:ae(()=>[c("button", {
        class:"off-the-radar hoverBtn h-8 mx-2 md:mx-5 sm:max-w-40 whitespace-nowrap text-xs", style:Kr(me(r)&& {
                fontSize:"0.45em"
            })
    }

    , F(o.$t("buttons.offTheRadar")), 5)]), _:1
})])
}
}
}

, $_= {
    class:"flex items-center justify-between bg-accent shadow-md text-main h-20 border-b border-gray px-4"
}

, j_=["src"], H_= {
    class:"cursor-pointer text-xs"
}

, U_= {
    class:"flex items-center h-full border-animate border-accent px-1"
}

, B_= {
    class:"flex items-center h-full border-animate border-accent px-1"
}

, V_= {
    class:"block"
}

, z_= {
    class:"grid grid-flow-col items-center gap-3"
}

, W_= {
    class:"flex flex-row gap-12"
}

, G_= {
    class:"font-bold mb-3"
}

, K_= {
    __name:"Navigation", setup(e) {
        const t=ne(null), n=[ {
            title:"TOPS", items:["TSHIRTS", "HOODIES", "ZIPPER", "LONGSLEEVES", "JACKETS"]
        }

        , {
        title:"BOTTOMS", items:["DENIMS", "JOGGER", "SHORTS"]
    }

    , {
    title:"ACCESSORIES", items:["BAGS", "BELTS", "BEANIES", "SOCKS", "JEWELRY", "GIFTCARDS"]
}

], r=["OFF THE RADAR", "CASHLANE", "STACKS", "EVERYBODY LOVES CASH", "MONEY TALKS BETTER DROP DENIMS"], s=E=> {
    t.value=E
}

, o=()=> {
    t.value=null
}

, i=ne( !1), l=ne( !1); function a() {
    l.value= !l.value
}

function u() {
    console.log("closing"), l.value= !1
}

function d() {
    i.value= !i.value
}

function f() {
    i.value= !1
}

const h=ne( !1); function p() {
    h.value= !h.value
}

const y=ne( !1); function w() {
    y.value= !y.value
}

return(E, b)=> {
    const S=Kt("router-link"); return J(), X(we, null, [c("header", null, [B(D_), c("div", $_, [c("button", {
                    class:"p-4 block md:hidden", onClick:w
                }

                , b[4]||(b[4]=[c("svg", {
                        xmlns:"http://www.w3.org/2000/svg", class:"h-8 w-8 opacity-55 cursor-pointer", fill:"none", viewBox:"0 0 24 24", stroke:"currentColor", "stroke-width":"1"
                    }

                    , [c("path", {
                        "stroke-linecap":"round", "stroke-linejoin":"round", d:"M4 6h16M4 12h16M4 18h16"

                    })], -1)])), c("div", null, [B(S, {
            to:"/", class:"block h-16"
        }

        , {
        default:ae(()=>[c("img", {
                src:me(r0), alt:"Logo", class:"h-full"
            }

            , null, 8, j_)]), _:1

})]), c("div", {
    class:"md:flex gap-5 hidden h-full uppercase relative", onMouseleave:o
}

, [B(S, {
    to:"/collections/shop-all", class:"flex items-center h-full border-animate border-accent px-1", onMouseover:b[0]||(b[0]=L=>s("SHOP ALL"))
}

, {
default:ae(()=>[c("span", H_, F(E.$t("menu.shopAll")), 1)]), _:1

}), c("div", U_, [B(S, {
        to:"/mystery-box", class:"cursor-pointer text-xs", onMouseover:o
    }

    , {
    default:ae(()=>[ue(F(E.$t("menu.mysteryBox")), 1)]), _:1

})]), c("div", {
    class:"flex items-center h-full border-animate border-accent px-1", onMouseover:b[1]||(b[1]=L=>s("COLLECTIONS"))
}

, [B(S, {
    to:"/collections", class:"cursor-pointer text-xs", onMouseover:o
}

, {
default:ae(()=>[ue(F(E.$t("menu.collections")), 1)]), _:1

})], 32), c("div", B_, [B(S, {
        to:"/bestseller", class:"cursor-pointer text-xs", onMouseover:o
    }

    , {
    default:ae(()=>[ue(F(E.$t("menu.bestseller")), 1)]), _:1

})]), B(S, {
    to:"/about", class:"flex items-center h-full border-animate border-accent px-1"
}

, {
default:ae(()=>[c("span", {
        class:"cursor-pointer text-xs", onMouseleave:o
    }

    , F(E.$t("menu.aboutUs")), 33)]), _:1

})], 32), c("nav", V_, [c("ul", z_, [c("li", {
            onClick:a
        }

        , [B(P_, {
            open:l.value, "handle:close":u, "handle:toggle":a
        }

        , null, 8, ["open"])]), c("li", null, [B(me(Cg), {
        size:"24", strokeWidth:"1", onClick:d, class:"cursor-pointer"

    })]), c("div", {
    class:"relative inline-flex items-center", onClick:p
}

, b[5]||(b[5]=[c("svg", {
        xmlns:"http://www.w3.org/2000/svg", class:"h-5 w-5 mr-2 cursor-pointer", "stroke-width":"1", viewBox:"0 0 16.933 16.933", id:"shopping-bag"
    }

    , [c("path", {
        d:"M8.474 0C6.95 0 5.699 1.166 5.579 2.646h-.922c-.839 0-1.454.65-1.582 1.533L1.464 15.324c-.127.877.69 1.61 1.584 1.61h10.84c.9 0 1.708-.734 1.582-1.61L13.86 4.179c-.123-.851-.719-1.533-1.582-1.533h-.91A2.896 2.896 0 0 0 8.473 0Zm0 .529c1.238 0 2.25.927 2.366 2.117H6.108A2.36 2.36 0 0 1 8.474.53zM4.657 3.176h7.621c.633 0 .982.542 1.059 1.078l1.61 11.146c.08.554-.493 1.004-1.06 1.004H3.047c-.565 0-1.138-.447-1.058-1.004L3.6 4.254c.084-.588.46-1.078 1.058-1.078Zm6.195 2.115c0 1.299-1.06 2.35-2.378 2.35S6.096 6.59 6.096 5.29c0-.352-.529-.354-.529 0 0 1.588 1.306 2.879 2.907 2.879 1.6 0 2.906-1.291 2.906-2.88 0-.351-.528-.351-.528 0z", color:"#000", "font-family":"sans-serif", "font-weight":"100", overflow:"visible", style: {
            "line-height":"normal", "font-variant-ligatures":"normal", "font-variant-position":"normal", "font-variant-caps":"normal", "font-variant-numeric":"normal", "font-variant-alternates":"normal", "font-feature-settings":"normal", "text-indent":"0", "text-align":"start", "text-decoration-line":"none", "text-decoration-style":"solid", "text-decoration-color":"#000", "text-transform":"none", "text-orientation":"mixed", isolation:"auto", "mix-blend-mode":"normal"
        }

    })], -1)]))])])]), B(Gn, {
    name:"fade"
}

, {
default:ae(()=>[t.value==="SHOP ALL" ?(J(), X("div", {
            key:0, class:"bg-accent flex justify-center p-6 border-t border-gray dropdown-menu absolute z-50 w-full text-xs", onMouseleave:o, onMouseover:b[2]||(b[2]=L=>s("SHOP ALL"))
        }

        , [c("div", W_, [B(So, {
                name:"fade-up", tag:"div", class:"flex flex-row gap-12"
            }

            , {
            default:ae(()=>[(J(), X(we, null, yn(n, (L, x)=>c("div", {
                                key:x, class:"flex flex-col"
                            }

                            , [c("h5", G_, F(L.title), 1), (J( !0), X(we, null, yn(L.items, (M, $)=>(J(), X("p", {
                                                key:$
                                            }

                                            , F(M), 1))), 128))])), 64))]), _:1
})])], 32)):Xe("", !0)]), _:1

}), B(Gn, {
    name:"fade"
}

, {
default:ae(()=>[t.value==="COLLECTIONS" ?(J(), X("div", {
            key:0, class:"bg-accent flex justify-center p-6 border-t border-gray dropdown-menu absolute z-50 w-full text-xs", onMouseleave:o, onMouseover:b[3]||(b[3]=L=>s("COLLECTIONS"))
        }

        , [B(So, {
            name:"fade-up", tag:"div", class:"flex flex-row gap-12"
        }

        , {
        default:ae(()=>[(J(), X(we, null, yn(r, (L, x)=>c("span", {
                            key:x
                        }

                        , F(L), 1)), 64))]), _:1
})], 32)):Xe("", !0)]), _:1

})]), B(O_, {
    open:i.value, onClose:f
}

, null, 8, ["open"]), B(n0, {
    open:h.value, onClose:p
}

, null, 8, ["open"]), B(m0, {
    nav:y.value, onCloseNav:w
}

, null, 8, ["nav"])], 64)
}
}
}

, q_=dt(K_, [["__scopeId", "data-v-d4b3f9b1"]]), Q_= {
    class:"px-4 md:px-8 2xl:px-16 border-t border-gray py-14 shadow-md tracking-normal"
}

, J_= {
    class:"footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-9 xl:gap-5 pb-6 md:pb-14 lg:pb-14 2xl:pb-18 3xl:pb-22 lg:mb-0.5 2xl:mb-0 3xl:-mb-1"
}

, Y_= {
    class:"text-base font-bold uppercase"
}

, Z_= {
    class:"text-base font-bold uppercase"
}

, X_= {
    class:"text-base font-bold uppercase"
}

, e2= {
    class:"flex flex-col gap-8"
}

, t2= {
    class:"text-xs opacity-75"
}

, n2= {
    __name:"Footer", setup(e) {
        const {
            t
        }

        =Cn(), n=xe(()=>t("footer.copyright", {
                year:new Date().getFullYear()

            })); return(r, s)=> {
        const o=Kt("RouterLink"); return J(), X("footer", Q_, [c("div", J_, [c("div", null, [c("h5", Y_, F(r.$t("footer.productOverview")), 1), c("p", null, [B(o, {
                            to:"/collections/shop-all"
                        }

                        , {
                        default:ae(()=>[ue(F(r.$t("footer.shopAll")), 1)]), _:1

                    })]), c("p", null, F(r.$t("footer.hoodiesZipper")), 1), c("p", null, F(r.$t("footer.jacketsVests")), 1), c("p", null, F(r.$t("footer.tShirtsLongsleeves")), 1), c("p", null, F(r.$t("footer.pantsJoggers")), 1), c("p", null, F(r.$t("footer.shorts")), 1), c("p", null, F(r.$t("footer.accessories")), 1)]), c("div", null, [c("h5", Z_, F(r.$t("footer.support")), 1), c("p", null, [B(o, {
                    to:"/faq"
                }

                , {
                default:ae(()=>[ue(F(r.$t("footer.faq")), 1)]), _:1

            })]), c("p", null, [B(o, {
            to:"/shipping"
        }

        , {
        default:ae(()=>[ue(F(r.$t("footer.shipping")), 1)]), _:1

    })]), c("p", null, F(r.$t("footer.makeReturn")), 1), c("p", null, [B(o, {
        to:"/track-your-order"
    }

    , {
    default:ae(()=>[ue(F(r.$t("footer.trackOrder")), 1)]), _:1

})])]), c("div", null, [c("h5", X_, F(r.$t("footer.information")), 1), c("p", null, [B(o, {
            to:"/impressum"
        }

        , {
        default:ae(()=>[ue(F(r.$t("footer.impressum")), 1)]), _:1

    })]), c("p", null, [B(o, {
        to:"/terms-of-service"
    }

    , {
    default:ae(()=>[ue(F(r.$t("footer.agb")), 1)]), _:1

})]), c("p", null, [B(o, {
        to:"/datenschutzerklarung"
    }

    , {
    default:ae(()=>[ue(F(r.$t("footer.privacyPolicy")), 1)]), _:1

})])])]), c("div", e2, [s[0]||(s[0]=c("div", {
            class:"text-xs opacity-55 flex justify-start gap-14"
        }

        , null, -1)), c("div", t2, F(n.value), 1)])])
}
}
}

, r2= {
    class:"relative -m-4 md:-m-8 2xl:-m-16 pb-4 md:pb-8 2xl:pb-16"
}

, s2= {
    class:"absolute bottom-0 z-10 m-10"
}

, o2= {
    class:"underline text-accent text-xs", href:""
}

, i2= {
    __name:"HeroBanner", setup(e) {
        return(t, n)=>(J(), X("div", r2, [n[1]||(n[1]=c("img", {
                        src:"//moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=4456", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=300   300w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=400   400w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=500   500w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=600   600w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=700   700w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=800   800w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=900   900w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=1000 1000w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=1200 1200w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=1400 1400w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=1600 1600w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=1800 1800w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=2000 2000w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=2200 2200w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=2400 2400w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=2600 2600w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=2800 2800w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=3000 3000w,
                        //moremoneymorelove.de/cdn/shop/files/01_231104_grjnd_MMML_full-51_edited_2_d5d4ebbc-9afb-40b7-8371-ade02cde318c.jpg?v=1726840553&width=3200 3200w
                        `, width:"4456", height:"2693", fetchpriority:"high", sizes:"100vw"
                    }

                    , null, -1)), c("div", s2, [n[0]||(n[0]=c("h1", {
                        class:"text-accent text-3xl my-5 font-extrabold"
                    }

                    , [c("strong", null, "MULTIFACED FLEECE")], -1)), c("a", o2, F(t.$t("menu.shopAll")), 1)])]))
}
}

, l2= {
    class:"mb-3"
}

, a2= {
    src:"//moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=1667", alt:"MULTIFACED FLEECE ROAST", srcset:` //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=200   200w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=300   300w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=400   400w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=500   500w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=600   600w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=700   700w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=800   800w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=1000 1000w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=1200 1200w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=1400 1400w,
    //moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&width=1600 1600w
    `, width:"1667", height:"2500", loading:"eager", sizes:"(max-width: 699px) 74vw, (max-width: 999px) 38vw, calc((100vw - 96px) / 4 - (24px / 4 * 3))", class:"product-card__image product-card__image--primary aspect-tall"
}

, c2= {
    src:"//moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=1667", alt:"PIEP JACK CLOTHING Fleece jacket", srcset:` //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=200   200w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=300   300w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=400   400w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=500   500w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=600   600w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=700   700w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=800   800w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=1000 1000w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=1200 1200w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=1400 1400w,
    //moremoneymorelove.de/cdn/shop/products/1_b67794f7-98a1-4744-877f-76719f0f2ef1.jpg?v=1706535436&width=1600 1600w
    `, width:"1667", height:"2500", loading:"eager", class:"product-card__image product-card__image--secondary mb-3", fetchpriority:"low", sizes:"(max-width: 699px) 74vw, (max-width: 999px) 38vw, calc((100vw - 96px) / 4 - (24px / 4 * 3))"
}

, mn= {
    __name:"ProductCard", props: {
        product: {
            type:Object, default:()=>({
                id:6, title:"MULTIFACED FLEECE GREEN", slug:"MULTIFACED-FLEECE-GREEN", description:"Qui ut doloribus eos quisquam fuga sit.", image_url:"//moremoneymorelove.de/cdn/shop/files/mmml_ecomm_tresor0693.png?v=1720541879&amp;width=1667", image_mime:"image/jpeg", image_size:1279, price:"89.91"
            })
    }
}

, setup(e) {
    console.log(e.product); const n=ne( !1), r=()=>n.value= !0, s=()=>n.value= !1; return(o, i)=> {
        const l=Kt("router-link"); return e.product?(J(), Wn(l, {
                key:0, to:"/product", class:"text-center items-center relative cursor-pointer text-xs", onMouseenter:r, onMouseleave:s
            }

            , {
            default:ae(()=>[i[0]||(i[0]=c("div", {
                        class:"bg-main text-accent px-1 py-1 m-3 absolute text-xs"
                    }

                    , [c("p", null, "NEW")], -1)), c("div", l2, [$t(c("img", a2, null, 512), [[wn, !n.value]]), $t(c("img", c2, null, 512), [[wn, n.value]])]), c("p", null, F(e.product.title), 1), c("p", null, F(e.product.price)+" $", 1)]), _:1
    })):Xe("", !0)
}
}
}

; var zs=class {
    constructor() {
        this.listeners=new Set, this.subscribe=this.subscribe.bind(this)
    }

    subscribe(e) {
        return this.listeners.add(e), this.onSubscribe(), ()=> {
            this.listeners.delete(e), this.onUnsubscribe()
        }
    }

    hasListeners() {
        return this.listeners.size>0
    }

    onSubscribe() {}

    onUnsubscribe() {}
}

, vr=typeof window>"u" ||"Deno" in globalThis; function Nt() {}

function u2(e, t) {
    return typeof e=="function" ?e(t):e
}

function Qi(e) {
    return typeof e=="number" &&e>=0&&e !==1/0
}

function If(e, t) {
    return Math.max(e+(t||0)-Date.now(), 0)
}

function Mr(e, t) {
    return typeof e=="function" ?e(t):e
}

function Bt(e, t) {
    return typeof e=="function" ?e(t):e
}

function Kc(e, t) {
    const {
        type:n="all", exact:r, fetchStatus:s, predicate:o, queryKey:i, stale:l
    }

    =e; if(i) {
        if(r) {
            if(t.queryHash !==Zl(i, t.options))return !1
        }

        else if( !Ms(t.queryKey, i))return !1
    }

    if(n !=="all") {
        const a=t.isActive(); if(n==="active" && !a||n==="inactive" &&a)return !1
    }

    return !(typeof l=="boolean" &&t.isStale() !==l||s&&s !==t.state.fetchStatus||o&& !o(t))
}

function qc(e, t) {
    const {
        exact:n, status:r, predicate:s, mutationKey:o
    }

    =e; if(o) {
        if( !t.options.mutationKey)return !1; if(n) {
            if(ks(t.options.mutationKey) !==ks(o))return !1
        }

        else if( !Ms(t.options.mutationKey, o))return !1
    }

    return !(r&&t.state.status !==r||s&& !s(t))
}

function Zl(e, t) {
    return((t==null?void 0:t.queryKeyHashFn)||ks)(e)
}

function ks(e) {
    return JSON.stringify(e, (t, n)=>Yi(n)?Object.keys(n).sort().reduce((r, s)=>(r[s]=n[s], r), {}):n)
}

function Ms(e, t) {
    return e===t? !0:typeof e !=typeof t? !1:e&&t&&typeof e=="object" &&typeof t=="object" ? !Object.keys(t).some(n=> !Ms(e[n], t[n])): !1
}

function kf(e, t) {
    if(e===t)return e; const n=Qc(e)&&Qc(t); if(n||Yi(e)&&Yi(t)) {
        const r=n?e:Object.keys(e), s=r.length, o=n?t:Object.keys(t), i=o.length, l=n?[]: {}

        ; let a=0; for(let u=0; u<i; u++) {
            const d=n?u:o[u]; ( !n&&r.includes(d)||n)&&e[d]===void 0&&t[d]===void 0?(l[d]=void 0, a++):(l[d]=kf(e[d], t[d]), l[d]===e[d]&&e[d] !==void 0&&a++)
        }

        return s===i&&a===s?e:l
    }

    return t
}

function Ji(e, t) {
    if( !t||Object.keys(e).length !==Object.keys(t).length)return !1; for(const n in e)if(e[n] !==t[n])return !1; return !0
}

function Qc(e) {
    return Array.isArray(e)&&e.length===Object.keys(e).length
}

function Yi(e) {
    if( !Jc(e))return !1; const t=e.constructor; if(t===void 0)return !0; const n=t.prototype; return !( !Jc(n)|| !n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e) !==Object.prototype)
}

function Jc(e) {
    return Object.prototype.toString.call(e)==="[object Object]"
}

function d2(e) {
    return new Promise(t=> {
            setTimeout(t, e)
        })
}

function Zi(e, t, n) {
    return typeof n.structuralSharing=="function" ?n.structuralSharing(e, t):n.structuralSharing !== !1?kf(e, t):t
}

function f2(e, t, n=0) {
    const r=[...e, t]; return n&&r.length>n?r.slice(1):r
}

function h2(e, t, n=0) {
    const r=[t, ...e]; return n&&r.length>n?r.slice(0, -1):r
}

var Xl=Symbol(); function Mf(e, t) {
    return !e.queryFn&&(t !=null&&t.initialPromise)?()=>t.initialPromise: !e.queryFn||e.queryFn===Xl?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}' `)):e.queryFn
}

var lr, Dn, Pr, vu, p2=(vu=class extends zs {
        constructor() {
            super(); oe(this, lr); oe(this, Dn); oe(this, Pr); Z(this, Pr, t=> {
                    if( !vr&&window.addEventListener) {
                        const n=()=>t(); return window.addEventListener("visibilitychange", n, !1), ()=> {
                            window.removeEventListener("visibilitychange", n)
                        }
                    }
                })
        }

        onSubscribe() {
            T(this, Dn)||this.setEventListener(T(this, Pr))
        }

        onUnsubscribe() {
            var t; this.hasListeners()||((t=T(this, Dn))==null||t.call(this), Z(this, Dn, void 0))
        }

        setEventListener(t) {
            var n; Z(this, Pr, t), (n=T(this, Dn))==null||n.call(this), Z(this, Dn, t(r=> {
                        typeof r=="boolean" ?this.setFocused(r):this.onFocus()
                    }))
        }

        setFocused(t) {
            T(this, lr) !==t&&(Z(this, lr, t), this.onFocus())
        }

        onFocus() {
            const t=this.isFocused(); this.listeners.forEach(n=> {
                    n(t)
                })
        }

        isFocused() {
            var t; return typeof T(this, lr)=="boolean" ?T(this, lr):((t=globalThis.document)==null?void 0:t.visibilityState) !=="hidden"
        }
    }

    , lr=new WeakMap, Dn=new WeakMap, Pr=new WeakMap, vu), ea=new p2, Nr, $n, Fr, yu, m2=(yu=class extends zs {
        constructor() {
            super(); oe(this, Nr, !0); oe(this, $n); oe(this, Fr); Z(this, Fr, t=> {
                    if( !vr&&window.addEventListener) {
                        const n=()=>t( !0), r=()=>t( !1); return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), ()=> {
                            window.removeEventListener("online", n), window.removeEventListener("offline", r)
                        }
                    }
                })
        }

        onSubscribe() {
            T(this, $n)||this.setEventListener(T(this, Fr))
        }

        onUnsubscribe() {
            var t; this.hasListeners()||((t=T(this, $n))==null||t.call(this), Z(this, $n, void 0))
        }

        setEventListener(t) {
            var n; Z(this, Fr, t), (n=T(this, $n))==null||n.call(this), Z(this, $n, t(this.setOnline.bind(this)))
        }

        setOnline(t) {
            T(this, Nr) !==t&&(Z(this, Nr, t), this.listeners.forEach(r=> {
                        r(t)
                    }))
        }

        isOnline() {
            return T(this, Nr)
        }
    }

    , Nr=new WeakMap, $n=new WeakMap, Fr=new WeakMap, yu), Lo=new m2; function Xi() {
    let e, t; const n=new Promise((s, o)=> {
            e=s, t=o

        }); n.status="pending", n.catch(()=> {}); function r(s) {
        Object.assign(n, s), delete n.resolve, delete n.reject
    }

    return n.resolve=s=> {
        r({
            status:"fulfilled", value:s
        }), e(s)
}

, n.reject=s=> {
    r({
        status:"rejected", reason:s
    }), t(s)
}

, n
}

function g2(e) {
    return Math.min(1e3*2**e, 3e4)
}

function Pf(e) {
    return(e??"online")==="online" ?Lo.isOnline(): !0
}

var Nf=class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert=e==null?void 0:e.revert, this.silent=e==null?void 0:e.silent
    }
}

; function _i(e) {
    return e instanceof Nf
}

function Ff(e) {
    let t= !1, n=0, r= !1, s; const o=Xi(), i=w=> {
        var E; r||(h(new Nf(w)), (E=e.abort)==null||E.call(e))
    }

    , l=()=> {
        t= !0
    }

    , a=()=> {
        t= !1
    }

    , u=()=>ea.isFocused()&&(e.networkMode==="always" ||Lo.isOnline())&&e.canRun(), d=()=>Pf(e.networkMode)&&e.canRun(), f=w=> {
        var E; r||(r= !0, (E=e.onSuccess)==null||E.call(e, w), s==null||s(), o.resolve(w))
    }

    , h=w=> {
        var E; r||(r= !0, (E=e.onError)==null||E.call(e, w), s==null||s(), o.reject(w))
    }

    , p=()=>new Promise(w=> {
            var E; s=b=> {
                (r||u())&&w(b)
            }

            , (E=e.onPause)==null||E.call(e)

        }).then(()=> {
            var w; s=void 0, r||(w=e.onContinue)==null||w.call(e)

        }), y=()=> {
        if(r)return; let w; const E=n===0?e.initialPromise:void 0; try {
            w=E??e.fn()
        }

        catch(b) {
            w=Promise.reject(b)
        }

        Promise.resolve(w).then(f).catch(b=> {
                var $; if(r)return; const S=e.retry??(vr?0:3), L=e.retryDelay??g2, x=typeof L=="function" ?L(n, b):L, M=S=== !0||typeof S=="number" &&n<S||typeof S=="function" &&S(n, b); if(t|| !M) {
                    h(b); return
                }

                n++, ($=e.onFail)==null||$.call(e, n, b), d2(x).then(()=>u()?void 0:p()).then(()=> {
                        t?h(b):y()
                    })
            })
    }

    ; return {
        promise:o, cancel:i, continue:()=>(s==null||s(), o), cancelRetry:l, continueRetry:a, canStart:d, start:()=>(d()?y():p().then(y), o)
    }
}

function b2() {
    let e=[], t=0, n=l=> {
        l()
    }

    , r=l=> {
        l()
    }

    , s=l=>setTimeout(l, 0); const o=l=> {
        t?e.push(l):s(()=> {
                n(l)
            })
    }

    , i=()=> {
        const l=e; e=[], l.length&&s(()=> {
                r(()=> {
                        l.forEach(a=> {
                                n(a)
                            })
                    })
            })
    }

    ; return {
        batch:l=> {
            let a; t++; try {
                a=l()
            }

            finally {
                t--, t||i()
            }

            return a
        }

        , batchCalls:l=>(...a)=> {
            o(()=> {
                    l(...a)
                })
        }

        , schedule:o, setNotifyFunction:l=> {
            n=l
        }

        , setBatchNotifyFunction:l=> {
            r=l
        }

        , setScheduler:l=> {
            s=l
        }
    }
}

var ct=b2(), ar, wu, Df=(wu=class {
        constructor() {
            oe(this, ar)
        }

        destroy() {
            this.clearGcTimeout()
        }

        scheduleGc() {
            this.clearGcTimeout(), Qi(this.gcTime)&&Z(this, ar, setTimeout(()=> {
                        this.optionalRemove()
                    }

                    , this.gcTime))
        }

        updateGcTime(e) {
            this.gcTime=Math.max(this.gcTime||0, e??(vr?1/0:5*60*1e3))
        }

        clearGcTimeout() {
            T(this, ar)&&(clearTimeout(T(this, ar)), Z(this, ar, void 0))
        }
    }

    , ar=new WeakMap, wu), Dr, $r, Pt, lt, Ns, cr, Ut, hn, Eu, _2=(Eu=class extends Df {
        constructor(t) {
            super(); oe(this, Ut); oe(this, Dr); oe(this, $r); oe(this, Pt); oe(this, lt); oe(this, Ns); oe(this, cr); Z(this, cr, !1), Z(this, Ns, t.defaultOptions), this.setOptions(t.options), this.observers=[], Z(this, Pt, t.cache), this.queryKey=t.queryKey, this.queryHash=t.queryHash, Z(this, Dr, v2(this.options)), this.state=t.state??T(this, Dr), this.scheduleGc()
        }

        get meta() {
            return this.options.meta
        }

        get promise() {
            var t; return(t=T(this, lt))==null?void 0:t.promise
        }

        setOptions(t) {
            this.options= {
                ...T(this, Ns), ...t
            }

            , this.updateGcTime(this.options.gcTime)
        }

        optionalRemove() {
            !this.observers.length&&this.state.fetchStatus==="idle" &&T(this, Pt).remove(this)
        }

        setData(t, n) {
            const r=Zi(this.state.data, t, this.options); return be(this, Ut, hn).call(this, {
                data:r, type:"success", dataUpdatedAt:n==null?void 0:n.updatedAt, manual:n==null?void 0:n.manual
            }), r
    }

    setState(t, n) {
        be(this, Ut, hn).call(this, {
            type:"setState", state:t, setStateOptions:n
        })
}

cancel(t) {
    var r, s; const n=(r=T(this, lt))==null?void 0:r.promise; return(s=T(this, lt))==null||s.cancel(t), n?n.then(Nt).catch(Nt):Promise.resolve()
}

destroy() {
    super.destroy(), this.cancel({
        silent: !0
    })
}

reset() {
    this.destroy(), this.setState(T(this, Dr))
}

isActive() {
    return this.observers.some(t=>Bt(t.options.enabled, this) !== !1)
}

isDisabled() {
    return this.getObserversCount()>0? !this.isActive():this.options.queryFn===Xl||this.state.dataUpdateCount+this.state.errorUpdateCount===0
}

isStale() {
    return this.state.isInvalidated? !0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0
}

isStaleByTime(t=0) {
    return this.state.isInvalidated||this.state.data===void 0|| !If(this.state.dataUpdatedAt, t)
}

onFocus() {
    var n; const t=this.observers.find(r=>r.shouldFetchOnWindowFocus()); t==null||t.refetch({
        cancelRefetch: !1
    }), (n=T(this, lt))==null||n.continue()
}

onOnline() {
    var n; const t=this.observers.find(r=>r.shouldFetchOnReconnect()); t==null||t.refetch({
        cancelRefetch: !1
    }), (n=T(this, lt))==null||n.continue()
}

addObserver(t) {
    this.observers.includes(t)||(this.observers.push(t), this.clearGcTimeout(), T(this, Pt).notify({
            type:"observerAdded", query:this, observer:t
        }))
}

removeObserver(t) {
    this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n !==t), this.observers.length||(T(this, lt)&&(T(this, cr)?T(this, lt).cancel({
                    revert: !0

                }):T(this, lt).cancelRetry()), this.scheduleGc()), T(this, Pt).notify({
        type:"observerRemoved", query:this, observer:t
    }))
}

getObserversCount() {
    return this.observers.length
}

invalidate() {
    this.state.isInvalidated||be(this, Ut, hn).call(this, {
        type:"invalidate"
    })
}

fetch(t, n) {
    var a, u, d; if(this.state.fetchStatus !=="idle") {
        if(this.state.data !==void 0&&(n !=null&&n.cancelRefetch))this.cancel({
            silent: !0
        }); else if(T(this, lt))return T(this, lt).continueRetry(), T(this, lt).promise
}

if(t&&this.setOptions(t), !this.options.queryFn) {
    const f=this.observers.find(h=>h.options.queryFn); f&&this.setOptions(f.options)
}

const r=new AbortController, s=f=> {
    Object.defineProperty(f, "signal", {
        enumerable: !0, get:()=>(Z(this, cr, !0), r.signal)
    })
}

, o=()=> {
    const f=Mf(this.options, n), h= {
        queryKey:this.queryKey, meta:this.meta
    }

    ; return s(h), Z(this, cr, !1), this.options.persister?this.options.persister(f, h, this):f(h)
}

, i= {
    fetchOptions:n, options:this.options, queryKey:this.queryKey, state:this.state, fetchFn:o
}

; s(i), (a=this.options.behavior)==null||a.onFetch(i, this), Z(this, $r, this.state), (this.state.fetchStatus==="idle" ||this.state.fetchMeta !==((u=i.fetchOptions)==null?void 0:u.meta))&&be(this, Ut, hn).call(this, {
    type:"fetch", meta:(d=i.fetchOptions)==null?void 0:d.meta

}); const l=f=> {
    var h, p, y, w; _i(f)&&f.silent||be(this, Ut, hn).call(this, {
        type:"error", error:f
    }), _i(f)||((p=(h=T(this, Pt).config).onError)==null||p.call(h, f, this), (w=(y=T(this, Pt).config).onSettled)==null||w.call(y, this.state.data, f, this)), this.scheduleGc()
}

; return Z(this, lt, Ff({
        initialPromise:n==null?void 0:n.initialPromise, fn:i.fetchFn, abort:r.abort.bind(r), onSuccess:f=> {
            var h, p, y, w; if(f===void 0) {
                l(new Error(`$ {
                            this.queryHash
                        }

                        data is undefined`)); return
            }

            try {
                this.setData(f)
            }

            catch(E) {
                l(E); return
            }

            (p=(h=T(this, Pt).config).onSuccess)==null||p.call(h, f, this), (w=(y=T(this, Pt).config).onSettled)==null||w.call(y, f, this.state.error, this), this.scheduleGc()
        }

        , onError:l, onFail:(f, h)=> {
            be(this, Ut, hn).call(this, {
                type:"failed", failureCount:f, error:h
            })
    }

    , onPause:()=> {
        be(this, Ut, hn).call(this, {
            type:"pause"
        })
}

, onContinue:()=> {
    be(this, Ut, hn).call(this, {
        type:"continue"
    })
}

, retry:i.options.retry, retryDelay:i.options.retryDelay, networkMode:i.options.networkMode, canRun:()=> !0
})), T(this, lt).start()
}
}

, Dr=new WeakMap, $r=new WeakMap, Pt=new WeakMap, lt=new WeakMap, Ns=new WeakMap, cr=new WeakMap, Ut=new WeakSet, hn=function(t) {
    const n=r=> {
        switch(t.type) {
            case"failed":return {
                ...r, fetchFailureCount:t.failureCount, fetchFailureReason:t.error
            }

            ; case"pause":return {
                ...r, fetchStatus:"paused"
            }

            ; case"continue":return {
                ...r, fetchStatus:"fetching"
            }

            ; case"fetch":return {
                ...r, ...$f(r.data, this.options), fetchMeta:t.meta??null
            }

            ; case"success":return {
                ...r, data:t.data, dataUpdateCount:r.dataUpdateCount+1, dataUpdatedAt:t.dataUpdatedAt??Date.now(), error:null, isInvalidated: !1, status:"success", ... !t.manual&& {
                    fetchStatus:"idle", fetchFailureCount:0, fetchFailureReason:null
                }
            }

            ; case"error":const s=t.error; return _i(s)&&s.revert&&T(this, $r)? {
                ...T(this, $r), fetchStatus:"idle"
            }

            : {
                ...r, error:s, errorUpdateCount:r.errorUpdateCount+1, errorUpdatedAt:Date.now(), fetchFailureCount:r.fetchFailureCount+1, fetchFailureReason:s, fetchStatus:"idle", status:"error"
            }

            ; case"invalidate":return {
                ...r, isInvalidated: !0
            }

            ; case"setState":return {
                ...r, ...t.state
            }
        }
    }

    ; this.state=n(this.state), ct.batch(()=> {
            this.observers.forEach(r=> {
                    r.onQueryUpdate()

                }), T(this, Pt).notify({
                query:this, type:"updated", action:t
            })
    })
}

, Eu); function $f(e, t) {
    return {
        fetchFailureCount:0, fetchFailureReason:null, fetchStatus:Pf(t.networkMode)?"fetching":"paused", ...e===void 0&& {
            error:null, status:"pending"
        }
    }
}

function v2(e) {
    const t=typeof e.initialData=="function" ?e.initialData():e.initialData, n=t !==void 0, r=n?typeof e.initialDataUpdatedAt=="function" ?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0; return {
        data:t, dataUpdateCount:0, dataUpdatedAt:n?r??Date.now():0, error:null, errorUpdateCount:0, errorUpdatedAt:0, fetchFailureCount:0, fetchFailureReason:null, fetchMeta:null, isInvalidated: !1, status:n?"success":"pending", fetchStatus:"idle"
    }
}

var Xt, Su, jf=(Su=class extends zs {
        constructor(n= {}) {
            super(); oe(this, Xt); this.config=n, Z(this, Xt, new Map)
        }

        build(n, r, s) {
            const o=r.queryKey, i=r.queryHash??Zl(o, r); let l=this.get(i); return l||(l=new _2({
                    cache:this, queryKey:o, queryHash:i, options:n.defaultQueryOptions(r), state:s, defaultOptions:n.getQueryDefaults(o)
                }), this.add(l)), l
    }

    add(n) {
        T(this, Xt).has(n.queryHash)||(T(this, Xt).set(n.queryHash, n), this.notify({
                type:"added", query:n
            }))
}

remove(n) {
    const r=T(this, Xt).get(n.queryHash); r&&(n.destroy(), r===n&&T(this, Xt).delete(n.queryHash), this.notify({
            type:"removed", query:n
        }))
}

clear() {
    ct.batch(()=> {
            this.getAll().forEach(n=> {
                    this.remove(n)
                })
        })
}

get(n) {
    return T(this, Xt).get(n)
}

getAll() {
    return[...T(this, Xt).values()]
}

find(n) {
    const r= {
        exact: !0, ...n
    }

    ; return this.getAll().find(s=>Kc(r, s))
}

findAll(n= {}) {
    const r=this.getAll(); return Object.keys(n).length>0?r.filter(s=>Kc(n, s)):r
}

notify(n) {
    ct.batch(()=> {
            this.listeners.forEach(r=> {
                    r(n)
                })
        })
}

onFocus() {
    ct.batch(()=> {
            this.getAll().forEach(n=> {
                    n.onFocus()
                })
        })
}

onOnline() {
    ct.batch(()=> {
            this.getAll().forEach(n=> {
                    n.onOnline()
                })
        })
}
}

, Xt=new WeakMap, Su), en, mt, ur, tn, kn, xu, y2=(xu=class extends Df {
        constructor(t) {
            super(); oe(this, tn); oe(this, en); oe(this, mt); oe(this, ur); this.mutationId=t.mutationId, Z(this, mt, t.mutationCache), Z(this, en, []), this.state=t.state||w2(), this.setOptions(t.options), this.scheduleGc()
        }

        setOptions(t) {
            this.options=t, this.updateGcTime(this.options.gcTime)
        }

        get meta() {
            return this.options.meta
        }

        addObserver(t) {
            T(this, en).includes(t)||(T(this, en).push(t), this.clearGcTimeout(), T(this, mt).notify({
                    type:"observerAdded", mutation:this, observer:t
                }))
    }

    removeObserver(t) {
        Z(this, en, T(this, en).filter(n=>n !==t)), this.scheduleGc(), T(this, mt).notify({
            type:"observerRemoved", mutation:this, observer:t
        })
}

optionalRemove() {
    T(this, en).length||(this.state.status==="pending" ?this.scheduleGc():T(this, mt).remove(this))
}

continue() {
    var t; return((t=T(this, ur))==null?void 0:t.continue())??this.execute(this.state.variables)
}

async execute(t) {
    var s, o, i, l, a, u, d, f, h, p, y, w, E, b, S, L, x, M, $, R; Z(this, ur, Ff({
            fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")), onFail:(G, U)=> {
                be(this, tn, kn).call(this, {
                    type:"failed", failureCount:G, error:U
                })
        }

        , onPause:()=> {
            be(this, tn, kn).call(this, {
                type:"pause"
            })
    }

    , onContinue:()=> {
        be(this, tn, kn).call(this, {
            type:"continue"
        })
}

, retry:this.options.retry??0, retryDelay:this.options.retryDelay, networkMode:this.options.networkMode, canRun:()=>T(this, mt).canRun(this)

})); const n=this.state.status==="pending", r= !T(this, ur).canStart(); try {
    if( !n) {
        be(this, tn, kn).call(this, {
            type:"pending", variables:t, isPaused:r

        }), await((o=(s=T(this, mt).config).onMutate)==null?void 0:o.call(s, t, this)); const U=await((l=(i=this.options).onMutate)==null?void 0:l.call(i, t)); U !==this.state.context&&be(this, tn, kn).call(this, {
        type:"pending", context:U, variables:t, isPaused:r
    })
}

const G=await T(this, ur).start(); return await((u=(a=T(this, mt).config).onSuccess)==null?void 0:u.call(a, G, t, this.state.context, this)), await((f=(d=this.options).onSuccess)==null?void 0:f.call(d, G, t, this.state.context)), await((p=(h=T(this, mt).config).onSettled)==null?void 0:p.call(h, G, null, this.state.variables, this.state.context, this)), await((w=(y=this.options).onSettled)==null?void 0:w.call(y, G, null, t, this.state.context)), be(this, tn, kn).call(this, {
    type:"success", data:G
}), G
}

catch(G) {
    try {
        throw await((b=(E=T(this, mt).config).onError)==null?void 0:b.call(E, G, t, this.state.context, this)), await((L=(S=this.options).onError)==null?void 0:L.call(S, G, t, this.state.context)), await((M=(x=T(this, mt).config).onSettled)==null?void 0:M.call(x, void 0, G, this.state.variables, this.state.context, this)), await((R=($=this.options).onSettled)==null?void 0:R.call($, void 0, G, t, this.state.context)), G
    }

    finally {
        be(this, tn, kn).call(this, {
            type:"error", error:G
        })
}
}

finally {
    T(this, mt).runNext(this)
}
}
}

, en=new WeakMap, mt=new WeakMap, ur=new WeakMap, tn=new WeakSet, kn=function(t) {
    const n=r=> {
        switch(t.type) {
            case"failed":return {
                ...r, failureCount:t.failureCount, failureReason:t.error
            }

            ; case"pause":return {
                ...r, isPaused: !0
            }

            ; case"continue":return {
                ...r, isPaused: !1
            }

            ; case"pending":return {
                ...r, context:t.context, data:void 0, failureCount:0, failureReason:null, error:null, isPaused:t.isPaused, status:"pending", variables:t.variables, submittedAt:Date.now()
            }

            ; case"success":return {
                ...r, data:t.data, failureCount:0, failureReason:null, error:null, status:"success", isPaused: !1
            }

            ; case"error":return {
                ...r, data:void 0, error:t.error, failureCount:r.failureCount+1, failureReason:t.error, isPaused: !1, status:"error"
            }
        }
    }

    ; this.state=n(this.state), ct.batch(()=> {
            T(this, en).forEach(r=> {
                    r.onMutationUpdate(t)

                }), T(this, mt).notify({
                mutation:this, type:"updated", action:t
            })
    })
}

, xu); function w2() {
    return {
        context:void 0, data:void 0, error:null, failureCount:0, failureReason:null, isPaused: !1, status:"idle", variables:void 0, submittedAt:0
    }
}

var Ot, Fs, Cu, Hf=(Cu=class extends zs {
        constructor(n= {}) {
            super(); oe(this, Ot); oe(this, Fs); this.config=n, Z(this, Ot, new Map), Z(this, Fs, Date.now())
        }

        build(n, r, s) {
            const o=new y2({
                mutationCache:this, mutationId:++Ks(this, Fs)._, options:n.defaultMutationOptions(r), state:s
            }); return this.add(o), o
    }

    add(n) {
        const r=so(n), s=T(this, Ot).get(r)??[]; s.push(n), T(this, Ot).set(r, s), this.notify({
            type:"added", mutation:n
        })
}

remove(n) {
    var s; const r=so(n); if(T(this, Ot).has(r)) {
        const o=(s=T(this, Ot).get(r))==null?void 0:s.filter(i=>i !==n); o&&(o.length===0?T(this, Ot).delete(r):T(this, Ot).set(r, o))
    }

    this.notify({
        type:"removed", mutation:n
    })
}

canRun(n) {
    var s; const r=(s=T(this, Ot).get(so(n)))==null?void 0:s.find(o=>o.state.status==="pending"); return !r||r===n
}

runNext(n) {
    var s; const r=(s=T(this, Ot).get(so(n)))==null?void 0:s.find(o=>o !==n&&o.state.isPaused); return(r==null?void 0:r.continue())??Promise.resolve()
}

clear() {
    ct.batch(()=> {
            this.getAll().forEach(n=> {
                    this.remove(n)
                })
        })
}

getAll() {
    return[...T(this, Ot).values()].flat()
}

find(n) {
    const r= {
        exact: !0, ...n
    }

    ; return this.getAll().find(s=>qc(r, s))
}

findAll(n= {}) {
    return this.getAll().filter(r=>qc(n, r))
}

notify(n) {
    ct.batch(()=> {
            this.listeners.forEach(r=> {
                    r(n)
                })
        })
}

resumePausedMutations() {
    const n=this.getAll().filter(r=>r.state.isPaused); return ct.batch(()=>Promise.all(n.map(r=>r.continue().catch(Nt))))
}
}

, Ot=new WeakMap, Fs=new WeakMap, Cu); function so(e) {
    var t; return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)
}

function Yc(e) {
    return {
        onFetch:(t, n)=> {
            var d, f, h, p, y; const r=t.options, s=(h=(f=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction, o=((p=t.state.data)==null?void 0:p.pages)||[], i=((y=t.state.data)==null?void 0:y.pageParams)||[]; let l= {
                pages:[], pageParams:[]
            }

            , a=0; const u=async()=> {
                let w= !1; const E=L=> {
                    Object.defineProperty(L, "signal", {
                        enumerable: !0, get:()=>(t.signal.aborted?w= !0:t.signal.addEventListener("abort", ()=> {
                                    w= !0
                                }), t.signal)
                    })
            }

            , b=Mf(t.options, t.fetchOptions), S=async(L, x, M)=> {
                if(w)return Promise.reject(); if(x==null&&L.pages.length)return Promise.resolve(L); const $= {
                    queryKey:t.queryKey, pageParam:x, direction:M?"backward":"forward", meta:t.options.meta
                }

                ; E($); const R=await b($), {
                maxPages:G
            }

            =t.options, U=M?h2:f2; return {
                pages:U(L.pages, R, G), pageParams:U(L.pageParams, x, G)
            }
        }

        ; if(s&&o.length) {
            const L=s==="backward", x=L?E2:Zc, M= {
                pages:o, pageParams:i
            }

            , $=x(r, M); l=await S(M, $, L)
        }

        else {
            const L=e??o.length; do {
                const x=a===0?i[0]??r.initialPageParam:Zc(r, l); if(a>0&&x==null)break; l=await S(l, x), a++
            }

            while(a<L)
        }

        return l
    }

    ; t.options.persister?t.fetchFn=()=> {
        var w, E; return(E=(w=t.options).persister)==null?void 0:E.call(w, u, {
            queryKey:t.queryKey, meta:t.options.meta, signal:t.signal
        }

        , n)
}

:t.fetchFn=u
}
}
}

function Zc(e, {
    pages:t, pageParams:n

}) {
    const r=t.length-1; return t.length>0?e.getNextPageParam(t[r], t, n[r], n):void 0
}

function E2(e, {
    pages:t, pageParams:n

}) {
    var r; return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e, t[0], t, n[0], n):void 0
}

var He, jn, Hn, jr, Hr, Un, Ur, Br, Lu, S2=(Lu=class {
        constructor(t= {}) {
            oe(this, He); oe(this, jn); oe(this, Hn); oe(this, jr); oe(this, Hr); oe(this, Un); oe(this, Ur); oe(this, Br); Z(this, He, t.queryCache||new jf), Z(this, jn, t.mutationCache||new Hf), Z(this, Hn, t.defaultOptions|| {}), Z(this, jr, new Map), Z(this, Hr, new Map), Z(this, Un, 0)
        }

        mount() {
            Ks(this, Un)._++, T(this, Un)===1&&(Z(this, Ur, ea.subscribe(async t=> {
                            t&&(await this.resumePausedMutations(), T(this, He).onFocus())

                        })), Z(this, Br, Lo.subscribe(async t=> {
                            t&&(await this.resumePausedMutations(), T(this, He).onOnline())
                        })))
        }

        unmount() {
            var t, n; Ks(this, Un)._--, T(this, Un)===0&&((t=T(this, Ur))==null||t.call(this), Z(this, Ur, void 0), (n=T(this, Br))==null||n.call(this), Z(this, Br, void 0))
        }

        isFetching(t) {
            return T(this, He).findAll({
                ...t, fetchStatus:"fetching"
            }).length
    }

    isMutating(t) {
        return T(this, jn).findAll({
            ...t, status:"pending"
        }).length
}

getQueryData(t) {
    var r; const n=this.defaultQueryOptions({
        queryKey:t
    }); return(r=T(this, He).get(n.queryHash))==null?void 0:r.state.data
}

ensureQueryData(t) {
    const n=this.getQueryData(t.queryKey); if(n===void 0)return this.fetchQuery(t); {
        const r=this.defaultQueryOptions(t), s=T(this, He).build(this, r); return t.revalidateIfStale&&s.isStaleByTime(Mr(r.staleTime, s))&&this.prefetchQuery(r), Promise.resolve(n)
    }
}

getQueriesData(t) {
    return T(this, He).findAll(t).map(({
            queryKey:n, state:r

        })=> {
        const s=r.data; return[n, s]
    })
}

setQueryData(t, n, r) {
    const s=this.defaultQueryOptions({
        queryKey:t

    }), o=T(this, He).get(s.queryHash), i=o==null?void 0:o.state.data, l=u2(n, i); if(l !==void 0)return T(this, He).build(this, s).setData(l, {
    ...r, manual: !0
})
}

setQueriesData(t, n, r) {
    return ct.batch(()=>T(this, He).findAll(t).map(({
                queryKey:s
            })=>[s, this.setQueryData(s, n, r)]))
}

getQueryState(t) {
    var r; const n=this.defaultQueryOptions({
        queryKey:t
    }); return(r=T(this, He).get(n.queryHash))==null?void 0:r.state
}

removeQueries(t) {
    const n=T(this, He); ct.batch(()=> {
            n.findAll(t).forEach(r=> {
                    n.remove(r)
                })
        })
}

resetQueries(t, n) {
    const r=T(this, He), s= {
        type:"active", ...t
    }

    ; return ct.batch(()=>(r.findAll(t).forEach(o=> {
                    o.reset()
                }), this.refetchQueries(s, n)))
}

cancelQueries(t= {}

    , n= {}) {
    const r= {
        revert: !0, ...n
    }

    , s=ct.batch(()=>T(this, He).findAll(t).map(o=>o.cancel(r))); return Promise.all(s).then(Nt).catch(Nt)
}

invalidateQueries(t= {}

    , n= {}) {
    return ct.batch(()=> {
            if(T(this, He).findAll(t).forEach(s=> {
                        s.invalidate()

                    }), t.refetchType==="none")return Promise.resolve(); const r= {
                ...t, type:t.refetchType??t.type??"active"
            }

            ; return this.refetchQueries(r, n)
        })
}

refetchQueries(t= {}

    , n) {
    const r= {
        ...n, cancelRefetch:(n==null?void 0:n.cancelRefetch)?? !0
    }

    , s=ct.batch(()=>T(this, He).findAll(t).filter(o=> !o.isDisabled()).map(o=> {
                let i=o.fetch(void 0, r); return r.throwOnError||(i=i.catch(Nt)), o.state.fetchStatus==="paused" ?Promise.resolve():i
            })); return Promise.all(s).then(Nt)
}

fetchQuery(t) {
    const n=this.defaultQueryOptions(t); n.retry===void 0&&(n.retry= !1); const r=T(this, He).build(this, n); return r.isStaleByTime(Mr(n.staleTime, r))?r.fetch(n):Promise.resolve(r.state.data)
}

prefetchQuery(t) {
    return this.fetchQuery(t).then(Nt).catch(Nt)
}

fetchInfiniteQuery(t) {
    return t.behavior=Yc(t.pages), this.fetchQuery(t)
}

prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Nt).catch(Nt)
}

ensureInfiniteQueryData(t) {
    return t.behavior=Yc(t.pages), this.ensureQueryData(t)
}

resumePausedMutations() {
    return Lo.isOnline()?T(this, jn).resumePausedMutations():Promise.resolve()
}

getQueryCache() {
    return T(this, He)
}

getMutationCache() {
    return T(this, jn)
}

getDefaultOptions() {
    return T(this, Hn)
}

setDefaultOptions(t) {
    Z(this, Hn, t)
}

setQueryDefaults(t, n) {
    T(this, jr).set(ks(t), {
        queryKey:t, defaultOptions:n
    })
}

getQueryDefaults(t) {
    const n=[...T(this, jr).values()]; let r= {}

    ; return n.forEach(s=> {
            Ms(t, s.queryKey)&&(r= {
                    ...r, ...s.defaultOptions
                })
        }), r
}

setMutationDefaults(t, n) {
    T(this, Hr).set(ks(t), {
        mutationKey:t, defaultOptions:n
    })
}

getMutationDefaults(t) {
    const n=[...T(this, Hr).values()]; let r= {}

    ; return n.forEach(s=> {
            Ms(t, s.mutationKey)&&(r= {
                    ...r, ...s.defaultOptions
                })
        }), r
}

defaultQueryOptions(t) {
    if(t._defaulted)return t; const n= {
        ...T(this, Hn).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: !0
    }

    ; return n.queryHash||(n.queryHash=Zl(n.queryKey, n)), n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode !=="always"), n.throwOnError===void 0&&(n.throwOnError= ! !n.suspense), !n.networkMode&&n.persister&&(n.networkMode="offlineFirst"), n.enabled !== !0&&n.queryFn===Xl&&(n.enabled= !1), n
}

defaultMutationOptions(t) {
    return t !=null&&t._defaulted?t: {
        ...T(this, Hn).mutations, ...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey), ...t, _defaulted: !0
    }
}

clear() {
    T(this, He).clear(), T(this, jn).clear()
}
}

, He=new WeakMap, jn=new WeakMap, Hn=new WeakMap, jr=new WeakMap, Hr=new WeakMap, Un=new WeakMap, Ur=new WeakMap, Br=new WeakMap, Lu), wt, _e, Ds, gt, dr, Vr, Bn, nn, $s, zr, Wr, fr, hr, Vn, Gr, Oe, fs, el, tl, nl, rl, sl, ol, il, Uf, Tu, x2=(Tu=class extends zs {
        constructor(t, n) {
            super(); oe(this, Oe); oe(this, wt); oe(this, _e); oe(this, Ds); oe(this, gt); oe(this, dr); oe(this, Vr); oe(this, Bn); oe(this, nn); oe(this, $s); oe(this, zr); oe(this, Wr); oe(this, fr); oe(this, hr); oe(this, Vn); oe(this, Gr, new Set); this.options=n, Z(this, wt, t), Z(this, nn, null), Z(this, Bn, Xi()), this.options.experimental_prefetchInRender||T(this, Bn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(n)
        }

        bindMethods() {
            this.refetch=this.refetch.bind(this)
        }

        onSubscribe() {
            this.listeners.size===1&&(T(this, _e).addObserver(this), Xc(T(this, _e), this.options)?be(this, Oe, fs).call(this):this.updateResult(), be(this, Oe, rl).call(this))
        }

        onUnsubscribe() {
            this.hasListeners()||this.destroy()
        }

        shouldFetchOnReconnect() {
            return ll(T(this, _e), this.options, this.options.refetchOnReconnect)
        }

        shouldFetchOnWindowFocus() {
            return ll(T(this, _e), this.options, this.options.refetchOnWindowFocus)
        }

        destroy() {
            this.listeners=new Set, be(this, Oe, sl).call(this), be(this, Oe, ol).call(this), T(this, _e).removeObserver(this)
        }

        setOptions(t, n) {
            const r=this.options, s=T(this, _e); if(this.options=T(this, wt).defaultQueryOptions(t), this.options.enabled !==void 0&&typeof this.options.enabled !="boolean" &&typeof this.options.enabled !="function" &&typeof Bt(this.options.enabled, T(this, _e)) !="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean"); be(this, Oe, il).call(this), T(this, _e).setOptions(this.options), r._defaulted&& !Ji(this.options, r)&&T(this, wt).getQueryCache().notify({
                type:"observerOptionsUpdated", query:T(this, _e), observer:this
            }); const o=this.hasListeners(); o&&eu(T(this, _e), s, this.options, r)&&be(this, Oe, fs).call(this), this.updateResult(n), o&&(T(this, _e) !==s||Bt(this.options.enabled, T(this, _e)) !==Bt(r.enabled, T(this, _e))||Mr(this.options.staleTime, T(this, _e)) !==Mr(r.staleTime, T(this, _e)))&&be(this, Oe, el).call(this); const i=be(this, Oe, tl).call(this); o&&(T(this, _e) !==s||Bt(this.options.enabled, T(this, _e)) !==Bt(r.enabled, T(this, _e))||i !==T(this, Vn))&&be(this, Oe, nl).call(this, i)
    }

    getOptimisticResult(t) {
        const n=T(this, wt).getQueryCache().build(T(this, wt), t), r=this.createResult(n, t); return L2(this, r)&&(Z(this, gt, r), Z(this, Vr, this.options), Z(this, dr, T(this, _e).state)), r
    }

    getCurrentResult() {
        return T(this, gt)
    }

    trackResult(t, n) {
        const r= {}

        ; return Object.keys(t).forEach(s=> {
                Object.defineProperty(r, s, {
                    configurable: !1, enumerable: !0, get:()=>(this.trackProp(s), n==null||n(s), t[s])
                })
        }), r
}

trackProp(t) {
    T(this, Gr).add(t)
}

getCurrentQuery() {
    return T(this, _e)
}

refetch({
    ...t
}

= {}) {
    return this.fetch({
        ...t
    })
}

fetchOptimistic(t) {
    const n=T(this, wt).defaultQueryOptions(t), r=T(this, wt).getQueryCache().build(T(this, wt), n); return r.fetch().then(()=>this.createResult(r, n))
}

fetch(t) {
    return be(this, Oe, fs).call(this, {
        ...t, cancelRefetch:t.cancelRefetch?? !0
    }).then(()=>(this.updateResult(), T(this, gt)))
}

createResult(t, n) {
    var G; const r=T(this, _e), s=this.options, o=T(this, gt), i=T(this, dr), l=T(this, Vr), u=t !==r?t.state:T(this, Ds), {
    state:d
}

=t; let f= {
    ...d
}

, h= !1, p; if(n._optimisticResults) {
    const U=this.hasListeners(), ee= !U&&Xc(t, n), re=U&&eu(t, r, n, s); (ee||re)&&(f= {
            ...f, ...$f(d.data, t.options)
        }), n._optimisticResults==="isRestoring" &&(f.fetchStatus="idle")
}

let {
    error:y, errorUpdatedAt:w, status:E
}

=f; if(n.select&&f.data !==void 0)if(o&&f.data===(i==null?void 0:i.data)&&n.select===T(this, $s))p=T(this, zr); else try {
    Z(this, $s, n.select), p=n.select(f.data), p=Zi(o==null?void 0:o.data, p, n), Z(this, zr, p), Z(this, nn, null)
}

catch(U) {
    Z(this, nn, U)
}

else p=f.data; if(n.placeholderData !==void 0&&p===void 0&&E==="pending") {
    let U; if(o !=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))U=o.data; else if(U=typeof n.placeholderData=="function" ?n.placeholderData((G=T(this, Wr))==null?void 0:G.state.data, T(this, Wr)):n.placeholderData, n.select&&U !==void 0)try {
        U=n.select(U), Z(this, nn, null)
    }

    catch(ee) {
        Z(this, nn, ee)
    }

    U !==void 0&&(E="success", p=Zi(o==null?void 0:o.data, U, n), h= !0)
}

T(this, nn)&&(y=T(this, nn), p=T(this, zr), w=Date.now(), E="error"); const b=f.fetchStatus==="fetching", S=E==="pending", L=E==="error", x=S&&b, M=p !==void 0, R= {
    status:E, fetchStatus:f.fetchStatus, isPending:S, isSuccess:E==="success", isError:L, isInitialLoading:x, isLoading:x, data:p, dataUpdatedAt:f.dataUpdatedAt, error:y, errorUpdatedAt:w, failureCount:f.fetchFailureCount, failureReason:f.fetchFailureReason, errorUpdateCount:f.errorUpdateCount, isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0, isFetchedAfterMount:f.dataUpdateCount>u.dataUpdateCount||f.errorUpdateCount>u.errorUpdateCount, isFetching:b, isRefetching:b&& !S, isLoadingError:L&& !M, isPaused:f.fetchStatus==="paused", isPlaceholderData:h, isRefetchError:L&&M, isStale:ta(t, n), refetch:this.refetch, promise:T(this, Bn)
}

; if(this.options.experimental_prefetchInRender) {
    const U=V=> {
        R.status==="error" ?V.reject(R.error):R.data !==void 0&&V.resolve(R.data)
    }

    , ee=()=> {
        const V=Z(this, Bn, R.promise=Xi()); U(V)
    }

    , re=T(this, Bn); switch(re.status) {
        case"pending":t.queryHash===r.queryHash&&U(re); break; case"fulfilled":(R.status==="error" ||R.data !==re.value)&&ee(); break; case"rejected":(R.status !=="error" ||R.error !==re.reason)&&ee(); break
    }
}

return R
}

updateResult(t) {
    const n=T(this, gt), r=this.createResult(T(this, _e), this.options); if(Z(this, dr, T(this, _e).state), Z(this, Vr, this.options), T(this, dr).data !==void 0&&Z(this, Wr, T(this, _e)), Ji(r, n))return; Z(this, gt, r); const s= {}

    , o=()=> {
        if( !n)return !0; const {
            notifyOnChangeProps:i
        }

        =this.options, l=typeof i=="function" ?i():i; if(l==="all" || !l&& !T(this, Gr).size)return !0; const a=new Set(l??T(this, Gr)); return this.options.throwOnError&&a.add("error"), Object.keys(T(this, gt)).some(u=> {
                const d=u; return T(this, gt)[d] !==n[d]&&a.has(d)
            })
    }

    ; (t==null?void 0:t.listeners) !== !1&&o()&&(s.listeners= !0), be(this, Oe, Uf).call(this, {
        ...s, ...t
    })
}

onQueryUpdate() {
    this.updateResult(), this.hasListeners()&&be(this, Oe, rl).call(this)
}
}

, wt=new WeakMap, _e=new WeakMap, Ds=new WeakMap, gt=new WeakMap, dr=new WeakMap, Vr=new WeakMap, Bn=new WeakMap, nn=new WeakMap, $s=new WeakMap, zr=new WeakMap, Wr=new WeakMap, fr=new WeakMap, hr=new WeakMap, Vn=new WeakMap, Gr=new WeakMap, Oe=new WeakSet, fs=function(t) {
    be(this, Oe, il).call(this); let n=T(this, _e).fetch(this.options, t); return t !=null&&t.throwOnError||(n=n.catch(Nt)), n
}

, el=function() {
    be(this, Oe, sl).call(this); const t=Mr(this.options.staleTime, T(this, _e)); if(vr||T(this, gt).isStale|| !Qi(t))return; const r=If(T(this, gt).dataUpdatedAt, t)+1; Z(this, fr, setTimeout(()=> {
                T(this, gt).isStale||this.updateResult()
            }

            , r))
}

, tl=function() {
    return(typeof this.options.refetchInterval=="function" ?this.options.refetchInterval(T(this, _e)):this.options.refetchInterval)?? !1
}

, nl=function(t) {
    be(this, Oe, ol).call(this), Z(this, Vn, t), !(vr||Bt(this.options.enabled, T(this, _e))=== !1|| !Qi(T(this, Vn))||T(this, Vn)===0)&&Z(this, hr, setInterval(()=> {
                (this.options.refetchIntervalInBackground||ea.isFocused())&&be(this, Oe, fs).call(this)
            }

            , T(this, Vn)))
}

, rl=function() {
    be(this, Oe, el).call(this), be(this, Oe, nl).call(this, be(this, Oe, tl).call(this))
}

, sl=function() {
    T(this, fr)&&(clearTimeout(T(this, fr)), Z(this, fr, void 0))
}

, ol=function() {
    T(this, hr)&&(clearInterval(T(this, hr)), Z(this, hr, void 0))
}

, il=function() {
    const t=T(this, wt).getQueryCache().build(T(this, wt), this.options); if(t===T(this, _e))return; const n=T(this, _e); Z(this, _e, t), Z(this, Ds, t.state), this.hasListeners()&&(n==null||n.removeObserver(this), t.addObserver(this))
}

, Uf=function(t) {
    ct.batch(()=> {
            t.listeners&&this.listeners.forEach(n=> {
                    n(T(this, gt))

                }), T(this, wt).getQueryCache().notify({
                query:T(this, _e), type:"observerResultsUpdated"
            })
    })
}

, Tu); function C2(e, t) {
    return Bt(t.enabled, e) !== !1&&e.state.data===void 0&& !(e.state.status==="error" &&t.retryOnMount=== !1)
}

function Xc(e, t) {
    return C2(e, t)||e.state.data !==void 0&&ll(e, t, t.refetchOnMount)
}

function ll(e, t, n) {
    if(Bt(t.enabled, e) !== !1) {
        const r=typeof n=="function" ?n(e):n; return r==="always" ||r !== !1&&ta(e, t)
    }

    return !1
}

function eu(e, t, n, r) {
    return(e !==t||Bt(r.enabled, e)=== !1)&&( !n.suspense||e.state.status !=="error")&&ta(e, n)
}

function ta(e, t) {
    return Bt(t.enabled, e) !== !1&&e.isStaleByTime(Mr(t.staleTime, e))
}

function L2(e, t) {
    return !Ji(e.getCurrentResult(), t)
}

var T2="VUE_QUERY_CLIENT"; function Bf(e) {
    const t=e?`:$ {
        e
    }

    `:""; return`$ {
        T2
    }

    $ {
        t
    }

    `
}

function tu(e, t) {
    Object.keys(e).forEach(n=> {
            e[n]=t[n]
        })
}

function al(e, t, n="", r=0) {
    if(t) {
        const s=t(e, n, r); if(s===void 0&&We(e)||s !==void 0)return s
    }

    if(Array.isArray(e))return e.map((s, o)=>al(s, t, String(o), r+1)); if(typeof e=="object" &&A2(e)) {
        const s=Object.entries(e).map(([o, i])=>[o, al(i, t, o, r+1)]); return Object.fromEntries(s)
    }

    return e
}

function O2(e, t) {
    return al(e, t)
}

function fe(e, t= !1) {
    return O2(e, (n, r, s)=> {
            if(s===1&&r==="queryKey")return fe(n, !0); if(t&&R2(n))return fe(n(), t); if(We(n))return fe(me(n), t)
        })
}

function A2(e) {
    if(Object.prototype.toString.call(e) !=="[object Object]")return !1; const t=Object.getPrototypeOf(e); return t===null||t===Object.prototype
}

function R2(e) {
    return typeof e=="function"
}

function nu(e, t) {
    return typeof e=="function" ?e(...t): ! !e
}

function I2(e="") {
    if( !Pp())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context."); const t=Bf(e), n=$e(t); if( !n)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."); return n
}

var k2=class extends jf {
    find(e) {
        return super.find(fe(e))
    }

    findAll(e= {}) {
        return super.findAll(fe(e))
    }
}

, M2=class extends Hf {
    find(e) {
        return super.find(fe(e))
    }

    findAll(e= {}) {
        return super.findAll(fe(e))
    }
}

, Vf=class extends S2 {
    constructor(e= {}) {
        const t= {
            defaultOptions:e.defaultOptions, queryCache:e.queryCache||new k2, mutationCache:e.mutationCache||new M2
        }

        ; super(t), this.isRestoring=ne( !1)
    }

    isFetching(e= {}) {
        return super.isFetching(fe(e))
    }

    isMutating(e= {}) {
        return super.isMutating(fe(e))
    }

    getQueryData(e) {
        return super.getQueryData(fe(e))
    }

    ensureQueryData(e) {
        return super.ensureQueryData(fe(e))
    }

    getQueriesData(e) {
        return super.getQueriesData(fe(e))
    }

    setQueryData(e, t, n= {}) {
        return super.setQueryData(fe(e), t, fe(n))
    }

    setQueriesData(e, t, n= {}) {
        return super.setQueriesData(fe(e), t, fe(n))
    }

    getQueryState(e) {
        return super.getQueryState(fe(e))
    }

    removeQueries(e= {}) {
        return super.removeQueries(fe(e))
    }

    resetQueries(e= {}

        , t= {}) {
        return super.resetQueries(fe(e), fe(t))
    }

    cancelQueries(e= {}

        , t= {}) {
        return super.cancelQueries(fe(e), fe(t))
    }

    invalidateQueries(e= {}

        , t= {}) {
        const n=fe(e), r=fe(t); if(super.invalidateQueries({
                ...n, refetchType:"none"
            }

            , r), n.refetchType==="none")return Promise.resolve(); const s= {
        ...n, type:n.refetchType??n.type??"active"
    }

    ; return Hs().then(()=>super.refetchQueries(s, r))
}

refetchQueries(e= {}

    , t= {}) {
    return super.refetchQueries(fe(e), fe(t))
}

fetchQuery(e) {
    return super.fetchQuery(fe(e))
}

prefetchQuery(e) {
    return super.prefetchQuery(fe(e))
}

fetchInfiniteQuery(e) {
    return super.fetchInfiniteQuery(fe(e))
}

prefetchInfiniteQuery(e) {
    return super.prefetchInfiniteQuery(fe(e))
}

setDefaultOptions(e) {
    super.setDefaultOptions(fe(e))
}

setQueryDefaults(e, t) {
    super.setQueryDefaults(fe(e), fe(t))
}

getQueryDefaults(e) {
    return super.getQueryDefaults(fe(e))
}

setMutationDefaults(e, t) {
    super.setMutationDefaults(fe(e), fe(t))
}

getMutationDefaults(e) {
    return super.getMutationDefaults(fe(e))
}
}

, P2= {
    install:(e, t= {})=> {
        const n=Bf(t.queryClientKey); let r; if("queryClient" in t&&t.queryClient)r=t.queryClient; else {
            const i="queryClientConfig" in t?t.queryClientConfig:void 0; r=new Vf(i)
        }

        vr||r.mount(); let s=()=> {}

        ; if(t.clientPersister) {
            r.isRestoring.value= !0; const[i, l]=t.clientPersister(r); s=i, l.then(()=> {
                    var a; r.isRestoring.value= !1, (a=t.clientPersisterOnSuccess)==null||a.call(t, r)
                })
        }

        const o=()=> {
            r.unmount(), s()
        }

        ; if(e.onUnmount)e.onUnmount(o); else {
            const i=e.unmount; e.unmount=function() {
                o(), i()
            }
        }

        e.provide(n, r)
    }
}

; function N2(e, t, n) {
    const r=I2(), s=xe(()=> {
            const p=fe(t); typeof p.enabled=="function" &&(p.enabled=p.enabled()); const y=r.defaultQueryOptions(p); return y._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic", y

        }), o=new e(r, s.value), i=Il(o.getCurrentResult()); let l=()=> {}

    ; Ze(r.isRestoring, p=> {
            p||(l(), l=o.subscribe(y=> {
                        tu(i, y)
                    }))
        }

        , {
        immediate: !0

    }); const a=()=> {
    o.setOptions(s.value), tu(i, o.getCurrentResult())
}

; Ze(s, a), ju(()=> {
        l()

    }); const u=(...p)=>(a(), i.refetch(...p)), d=()=>new Promise((p, y)=> {
        let w=()=> {}

        ; const E=()=> {
            if(s.value.enabled !== !1) {
                o.setOptions(s.value); const b=o.getOptimisticResult(s.value); b.isStale?(w(), o.fetchOptimistic(s.value).then(p, S=> {
                            nu(s.value.throwOnError, [S, o.getCurrentQuery()])?y(S):p(o.getCurrentResult())
                        })):(w(), p(b))
            }
        }

        ; E(), w=Ze(s, E)

    }); Ze(()=>i.error, p=> {
        if(i.isError&& !i.isFetching&&nu(s.value.throwOnError, [p, o.getCurrentQuery()]))throw p
    }); const h=tp(i); for(const p in i)typeof i[p]=="function" &&(h[p]=i[p]); return h.suspense=d, h.refetch=u, h
}

function F2(e, t) {
    return N2(x2, e)
}

function zf(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}

const {
    toString:D2
}

=Object.prototype, {
getPrototypeOf:na
}

=Object, qo=(e=>t=> {
        const n=D2.call(t); return e[n]||(e[n]=n.slice(8, -1).toLowerCase())

    })(Object.create(null)), qt=e=>(e=e.toLowerCase(), t=>qo(t)===e), Qo=e=>t=>typeof t===e, {
isArray:ns
}

=Array, Ps=Qo("undefined"); function $2(e) {
    return e !==null&& !Ps(e)&&e.constructor !==null&& !Ps(e.constructor)&&It(e.constructor.isBuffer)&&e.constructor.isBuffer(e)
}

const Wf=qt("ArrayBuffer"); function j2(e) {
    let t; return typeof ArrayBuffer<"u" &&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Wf(e.buffer), t
}

const H2=Qo("string"), It=Qo("function"), Gf=Qo("number"), Jo=e=>e !==null&&typeof e=="object", U2=e=>e=== !0||e=== !1, ho=e=> {
    if(qo(e) !=="object")return !1; const t=na(e); return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&& !(Symbol.toStringTag in e)&& !(Symbol.iterator in e)
}

, B2=qt("Date"), V2=qt("File"), z2=qt("Blob"), W2=qt("FileList"), G2=e=>Jo(e)&&It(e.pipe), K2=e=> {
    let t; return e&&(typeof FormData=="function" &&e instanceof FormData||It(e.append)&&((t=qo(e))==="formdata" ||t==="object" &&It(e.toString)&&e.toString()==="[object FormData]"))
}

, q2=qt("URLSearchParams"), [Q2, J2, Y2, Z2]=["ReadableStream", "Request", "Response", "Headers"].map(qt), X2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""); function Ws(e, t, {
    allOwnKeys:n= !1
}

= {}) {
    if(e===null||typeof e>"u")return; let r, s; if(typeof e !="object" &&(e=[e]), ns(e))for(r=0, s=e.length; r<s; r++)t.call(null, e[r], r, e); else {
        const o=n?Object.getOwnPropertyNames(e):Object.keys(e), i=o.length; let l; for(r=0; r<i; r++)l=o[r], t.call(null, e[l], l, e)
    }
}

function Kf(e, t) {
    t=t.toLowerCase(); const n=Object.keys(e); let r=n.length, s; for(; r-- >0; )if(s=n[r], t===s.toLowerCase())return s; return null
}

const ir=typeof globalThis<"u" ?globalThis:typeof self<"u" ?self:typeof window<"u" ?window:global, qf=e=> !Ps(e)&&e !==ir; function cl() {
    const {
        caseless:e
    }

    =qf(this)&&this|| {}

    , t= {}

    , n=(r, s)=> {
        const o=e&&Kf(t, s)||s; ho(t[o])&&ho(r)?t[o]=cl(t[o], r):ho(r)?t[o]=cl({}

        , r):ns(r)?t[o]=r.slice():t[o]=r
}

; for(let r=0, s=arguments.length; r<s; r++)arguments[r]&&Ws(arguments[r], n); return t
}

const ev=(e, t, n, {
    allOwnKeys:r
}

= {})=>(Ws(t, (s, o)=> {
            n&&It(s)?e[o]=zf(s, n):e[o]=s
        }

        , {
        allOwnKeys:r

    }), e), tv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)), e), nv=(e, t, n, r)=> {
    e.prototype=Object.create(t.prototype, r), e.prototype.constructor=e, Object.defineProperty(e, "super", {
        value:t.prototype
    }), n&&Object.assign(e.prototype, n)
}

, rv=(e, t, n, r)=> {
    let s, o, i; const l= {}

    ; if(t=t|| {}

        , e==null)return t; do {
        for(s=Object.getOwnPropertyNames(e), o=s.length; o-- >0; )i=s[o], ( !r||r(i, e, t))&& !l[i]&&(t[i]=e[i], l[i]= !0); e=n !== !1&&na(e)
    }

    while(e&&( !n||n(e, t))&&e !==Object.prototype); return t
}

, sv=(e, t, n)=> {
    e=String(e), (n===void 0||n>e.length)&&(n=e.length), n-=t.length; const r=e.indexOf(t, n); return r !==-1&&r===n
}

, ov=e=> {
    if( !e)return null; if(ns(e))return e; let t=e.length; if( !Gf(t))return null; const n=new Array(t); for(; t-- >0; )n[t]=e[t]; return n
}

, iv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u" &&na(Uint8Array)), lv=(e, t)=> {
    const r=(e&&e[Symbol.iterator]).call(e); let s; for(; (s=r.next())&& !s.done; ) {
        const o=s.value; t.call(e, o[0], o[1])
    }
}

, av=(e, t)=> {
    let n; const r=[]; for(; (n=e.exec(t)) !==null; )r.push(n); return r
}

, cv=qt("HTMLFormElement"), uv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
        return r.toUpperCase()+s

    }), ru=(({
        hasOwnProperty:e

    })=>(t, n)=>e.call(t, n))(Object.prototype), dv=qt("RegExp"), Qf=(e, t)=> {
    const n=Object.getOwnPropertyDescriptors(e), r= {}

    ; Ws(n, (s, o)=> {
            let i; (i=t(s, o, e)) !== !1&&(r[o]=i||s)
        }), Object.defineProperties(e, r)
}

, fv=e=> {
    Qf(e, (t, n)=> {
            if(It(e)&&["arguments", "caller", "callee"].indexOf(n) !==-1)return !1; const r=e[n]; if(It(r)) {
                if(t.enumerable= !1, "writable" in t) {
                    t.writable= !1; return
                }

                t.set||(t.set=()=> {
                        throw Error("Can not rewrite read-only method '" +n+"'")
                    })
            }
        })
}

, hv=(e, t)=> {
    const n= {}

    , r=s=> {
        s.forEach(o=> {
                n[o]= !0
            })
    }

    ; return ns(e)?r(e):r(String(e).split(t)), n
}

, pv=()=> {}

, mv=(e, t)=>e !=null&&Number.isFinite(e=+e)?e:t, vi="abcdefghijklmnopqrstuvwxyz", su="0123456789", Jf= {
    DIGIT:su, ALPHA:vi, ALPHA_DIGIT:vi+vi.toUpperCase()+su
}

, gv=(e=16, t=Jf.ALPHA_DIGIT)=> {
    let n=""; const {
        length:r
    }

    =t; for(; e--; )n+=t[Math.random()*r|0]; return n
}

; function bv(e) {
    return ! !(e&&It(e.append)&&e[Symbol.toStringTag]==="FormData" &&e[Symbol.iterator])
}

const _v=e=> {
    const t=new Array(10), n=(r, s)=> {
        if(Jo(r)) {
            if(t.indexOf(r)>=0)return; if( !("toJSON" in r)) {
                t[s]=r; const o=ns(r)?[]: {}

                ; return Ws(r, (i, l)=> {
                        const a=n(i, s+1); !Ps(a)&&(o[l]=a)
                    }), t[s]=void 0, o
            }
        }

        return r
    }

    ; return n(e, 0)
}

, vv=qt("AsyncFunction"), yv=e=>e&&(Jo(e)||It(e))&&It(e.then)&&It(e.catch), Yf=((e, t)=>e?setImmediate:t?((n, r)=>(ir.addEventListener("message", ({
                    source:s, data:o

                })=> {
                s===ir&&o===n&&r.length&&r.shift()()
            }

            , !1), s=> {
            r.push(s), ir.postMessage(n, "*")

        }))(`axios@$ {
        Math.random()
    }

    `, []):n=>setTimeout(n))(typeof setImmediate=="function", It(ir.postMessage)), wv=typeof queueMicrotask<"u" ?queueMicrotask.bind(ir):typeof process<"u" &&process.nextTick||Yf, P= {
    isArray:ns, isArrayBuffer:Wf, isBuffer:$2, isFormData:K2, isArrayBufferView:j2, isString:H2, isNumber:Gf, isBoolean:U2, isObject:Jo, isPlainObject:ho, isReadableStream:Q2, isRequest:J2, isResponse:Y2, isHeaders:Z2, isUndefined:Ps, isDate:B2, isFile:V2, isBlob:z2, isRegExp:dv, isFunction:It, isStream:G2, isURLSearchParams:q2, isTypedArray:iv, isFileList:W2, forEach:Ws, merge:cl, extend:ev, trim:X2, stripBOM:tv, inherits:nv, toFlatObject:rv, kindOf:qo, kindOfTest:qt, endsWith:sv, toArray:ov, forEachEntry:lv, matchAll:av, isHTMLForm:cv, hasOwnProperty:ru, hasOwnProp:ru, reduceDescriptors:Qf, freezeMethods:fv, toObjectSet:hv, toCamelCase:uv, noop:pv, toFiniteNumber:mv, findKey:Kf, global:ir, isContextDefined:qf, ALPHABET:Jf, generateString:gv, isSpecCompliantForm:bv, toJSONObject:_v, isAsyncFn:vv, isThenable:yv, setImmediate:Yf, asap:wv
}

; function ce(e, t, n, r, s) {
    Error.call(this), Error.captureStackTrace?Error.captureStackTrace(this, this.constructor):this.stack=new Error().stack, this.message=e, this.name="AxiosError", t&&(this.code=t), n&&(this.config=n), r&&(this.request=r), s&&(this.response=s, this.status=s.status?s.status:null)
}

P.inherits(ce, Error, {
    toJSON:function() {
        return {
            message:this.message, name:this.name, description:this.description, number:this.number, fileName:this.fileName, lineNumber:this.lineNumber, columnNumber:this.columnNumber, stack:this.stack, config:P.toJSONObject(this.config), code:this.code, status:this.status
        }
    }

}); const Zf=ce.prototype, Xf= {}

; ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=> {
        Xf[e]= {
            value:e
        }

    }); Object.defineProperties(ce, Xf); Object.defineProperty(Zf, "isAxiosError", {
    value: !0

}); ce.from=(e, t, n, r, s, o)=> {
    const i=Object.create(Zf); return P.toFlatObject(e, i, function(a) {
            return a !==Error.prototype
        }

        , l=>l !=="isAxiosError"), ce.call(i, e.message, t, n, r, s), i.cause=e, i.name=e.name, o&&Object.assign(i, o), i
}

; const Ev=null; function ul(e) {
    return P.isPlainObject(e)||P.isArray(e)
}

function eh(e) {
    return P.endsWith (e, "[]")?e.slice(0, -2):e
}

function ou(e, t, n) {
    return e?e.concat(t).map(function(s, o) {
            return s=eh(s), !n&&o?"[" +s+"]":s
        }).join(n?".":""):t
}

function Sv(e) {
    return P.isArray(e)&& !e.some(ul)
}

const xv=P.toFlatObject(P, {}

, null, function(t) {
    return/^is[A-Z]/.test(t)

}); function Yo(e, t, n) {
    if( !P.isObject(e))throw new TypeError("target must be an object"); t=t||new FormData, n=P.toFlatObject(n, {
        metaTokens: !0, dots: !1, indexes: !1
    }

    , !1, function(w, E) {
        return !P.isUndefined(E[w])

    }); const r=n.metaTokens, s=n.visitor||d, o=n.dots, i=n.indexes, a=(n.Blob||typeof Blob<"u" &&Blob)&&P.isSpecCompliantForm(t); if( !P.isFunction(s))throw new TypeError("visitor must be a function"); function u(y) {
    if(y===null)return""; if(P.isDate(y))return y.toISOString(); if( !a&&P.isBlob(y))throw new ce("Blob is not supported. Use a Buffer instead."); return P.isArrayBuffer(y)||P.isTypedArray(y)?a&&typeof Blob=="function" ?new Blob([y]):Buffer.from(y):y
}

function d(y, w, E) {
    let b=y; if(y&& !E&&typeof y=="object") {
        if(P.endsWith (w, "{}"))w=r?w:w.slice(0, -2), y=JSON.stringify(y); else if(P.isArray(y)&&Sv(y)||(P.isFileList(y)||P.endsWith (w, "[]"))&&(b=P.toArray(y)))return w=eh(w), b.forEach(function(L, x) {
                !(P.isUndefined(L)||L===null)&&t.append(i=== !0?ou([w], x, o):i===null?w:w+"[]", u(L))
            }), !1
    }

    return ul(y)? !0:(t.append(ou(E, w, o), u(y)), !1)
}

const f=[], h=Object.assign(xv, {
    defaultVisitor:d, convertValue:u, isVisitable:ul

}); function p(y, w) {
    if( !P.isUndefined(y)) {
        if(f.indexOf(y) !==-1)throw Error("Circular reference detected in " +w.join(".")); f.push(y), P.forEach(y, function(b, S) {
                ( !(P.isUndefined(b)||b===null)&&s.call(t, b, P.isString(S)?S.trim():S, w, h))=== !0&&p(b, w?w.concat(S):[S])
            }), f.pop()
    }
}

if( !P.isObject(e))throw new TypeError("data must be an object"); return p(e), t
}

function iu(e) {
    const t= {
        "!":"%21", "'":"%27", "(":"%28", ")":"%29", "~":"%7E", "%20":"+", "%00":"\0"
    }

    ; return encodeURIComponent(e).replace(/[ !'()~]|%20|%00/g,function(r){return t[r]})}function ra(e,t){this._pairs=[],e&&Yo(e,this,t)}const th=ra.prototype;th.append=function(t,n){this._pairs.push([t,n])};th.toString=function(t){const n=t?function(r){return t.call(this,r,iu)}:iu;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Cv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nh(e,t,n){if(!t)return e;const r=n&&n.encode||Cv,s=n&&n.serialize;let o;if(s?o=s(t,n):o=P.isURLSearchParams(t)?t.toString():new ra(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class lu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const rh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lv=typeof URLSearchParams<"u"?URLSearchParams:ra,Tv=typeof FormData<"u"?FormData:null,Ov=typeof Blob<"u"?Blob:null,Av={isBrowser:!0,classes:{URLSearchParams:Lv,FormData:Tv,Blob:Ov},protocols:["http","https","file","blob","url","data"]},sa=typeof window<"u"&&typeof document<"u",dl=typeof navigator=="object"&&navigator||void 0,Rv=sa&&(!dl||["ReactNative","NativeScript","NS"].indexOf(dl.product)<0),Iv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kv=sa&&window.location.href||"http://localhost",Mv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sa,hasStandardBrowserEnv:Rv,hasStandardBrowserWebWorkerEnv:Iv,navigator:dl,origin:kv},Symbol.toStringTag,{value:"Module"})),Et={...Mv,...Av};function Pv(e,t){return Yo(e,new Et.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return Et.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Nv(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Fv(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function sh(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),a=o>=n.length;return i=!i&&P.isArray(s)?s.length:i,a?(P.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!P.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&P.isArray(s[i])&&(s[i]=Fv(s[i])),!l)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,s)=>{t(Nv(r),s,n,0)}),n}return null}function Dv(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Gs={transitional:rh,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return s?JSON.stringify(sh(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pv(t,this.formSerializer).toString();if((l=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Yo(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Dv(t)):t}],transformResponse:[function(t){const n=this.transitional||Gs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?ce.from(l,ce.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Et.classes.FormData,Blob:Et.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Gs.headers[e]={}});const $v=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jv=e=>{const t={};let n,r,s;return e&&e.split(`
 `).forEach(function(i) {
            s=i.indexOf(":"), n=i.substring(0, s).trim().toLowerCase(), r=i.substring(s+1).trim(), !( !n||t[n]&&$v[n])&&(n==="set-cookie" ?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", " +r:r)
        }), t
}

, au=Symbol("internals"); function us(e) {
    return e&&String(e).trim().toLowerCase()
}

function po(e) {
    return e=== !1||e==null?e:P.isArray(e)?e.map(po):String(e)
}

function Hv(e) {
    const t=Object.create(null), n=/([^\s, ; =]+)\s*(?:=\s*([^, ; ]+))?/g; let r; for(; r=n.exec(e); )t[r[1]]=r[2]; return t
}

const Uv=e=>/^[-_a-zA-Z0-9^`|~, !#$%&'*+.]+$/.test(e.trim());function yi(e,t,n,r,s){if(P.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function Bv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vv(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class St{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,a,u){const d=us(a);if(!d)throw new Error("header name must be a non-empty string");const f=P.findKey(s,d);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||a]=po(l))}const i=(l,a)=>P.forEach(l,(u,d)=>o(u,d,a));if(P.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(P.isString(t)&&(t=t.trim())&&!Uv(t))i(jv(t),n);else if(P.isHeaders(t))for(const[l,a]of t.entries())o(a,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=us(t),t){const r=P.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Hv(s);if(P.isFunction(n))return n.call(this,s,r);if(P.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=us(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||yi(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=us(i),i){const l=P.findKey(r,i);l&&(!n||yi(r,r[l],l,n))&&(delete r[l],s=!0)}}return P.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||yi(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return P.forEach(this,(s,o)=>{const i=P.findKey(r,o);if(i){n[i]=po(s),delete n[o];return}const l=t?Bv(o):String(o).trim();l!==o&&delete n[o],n[l]=po(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
 `)
}

get[Symbol.toStringTag]() {
    return"AxiosHeaders"
}

static from(t) {
    return t instanceof this?t:new this(t)
}

static concat(t, ...n) {
    const r=new this(t); return n.forEach(s=>r.set(s)), r
}

static accessor(t) {
    const r=(this[au]=this[au]= {
            accessors: {}

        }).accessors, s=this.prototype; function o(i) {
        const l=us(i); r[l]||(Vv(s, i), r[l]= !0)
    }

    return P.isArray(t)?t.forEach(o):o(t), this
}
}

St.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]); P.reduceDescriptors(St.prototype, ({
        value:e
    }

    , t)=> {
    let n=t[0].toUpperCase()+t.slice(1); return {
        get:()=>e, set(r) {
            this[n]=r
        }
    }

}); P.freezeMethods(St); function wi(e, t) {
    const n=this||Gs, r=t||n, s=St.from(r.headers); let o=r.data; return P.forEach(e, function(l) {
            o=l.call(n, o, s.normalize(), t?t.status:void 0)
        }), s.normalize(), o
}

function oh(e) {
    return ! !(e&&e.__CANCEL__)
}

function rs(e, t, n) {
    ce.call(this, e??"canceled", ce.ERR_CANCELED, t, n), this.name="CanceledError"
}

P.inherits(rs, ce, {
    __CANCEL__: !0

}); function ih(e, t, n) {
    const r=n.config.validateStatus; !n.status|| !r||r(n.status)?e(n):t(new ce("Request failed with status code " +n.status, [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4], n.config, n.request, n))
}

function zv(e) {
    const t=/^([-+\w] {
            1, 25
        })(:?\/\/|:)/.exec(e); return t&&t[1]||""
}

function Wv(e, t) {
    e=e||10; const n=new Array(e), r=new Array(e); let s=0, o=0, i; return t=t !==void 0?t:1e3, function(a) {
        const u=Date.now(), d=r[o]; i||(i=u), n[s]=a, r[s]=u; let f=o, h=0; for(; f !==s; )h+=n[f++], f=f%e; if(s=(s+1)%e, s===o&&(o=(o+1)%e), u-i<t)return; const p=d&&u-d; return p?Math.round(h*1e3/p):void 0
    }
}

function Gv(e, t) {
    let n=0, r=1e3/t, s, o; const i=(u, d=Date.now())=> {
        n=d, s=null, o&&(clearTimeout(o), o=null), e.apply(null, u)
    }

    ; return[(...u)=> {
        const d=Date.now(), f=d-n; f>=r?i(u, d):(s=u, o||(o=setTimeout(()=> {
                        o=null, i(s)
                    }

                    , r-f)))
    }

    , ()=>s&&i(s)]
}

const To=(e, t, n=3)=> {
    let r=0; const s=Wv(50, 250); return Gv(o=> {
            const i=o.loaded, l=o.lengthComputable?o.total:void 0, a=i-r, u=s(a), d=i<=l; r=i; const f= {
                loaded:i, total:l, progress:l?i/l:void 0, bytes:a, rate:u||void 0, estimated:u&&l&&d?(l-i)/u:void 0, event:o, lengthComputable:l !=null, [t?"download":"upload"]: !0
            }

            ; e(f)
        }

        , n)
}

, cu=(e, t)=> {
    const n=e !=null; return[r=>t[0]({
        lengthComputable:n, total:e, loaded:r
    }), t[1]]
}

, uu=e=>(...t)=>P.asap(()=>e(...t)), Kv=Et.hasStandardBrowserEnv?function() {
    const t=Et.navigator&&/(msie|trident)/i.test(Et.navigator.userAgent), n=document.createElement("a"); let r; function s(o) {
        let i=o; return t&&(n.setAttribute("href", i), i=n.href), n.setAttribute("href", i), {
        href:n.href, protocol:n.protocol?n.protocol.replace(/:$/, ""):"", host:n.host, search:n.search?n.search.replace(/^\?/, ""):"", hash:n.hash?n.hash.replace(/^#/, ""):"", hostname:n.hostname, port:n.port, pathname:n.pathname.charAt(0)==="/" ?n.pathname:"/" +n.pathname
    }
}

return r=s(window.location.href), function(i) {
    const l=P.isString(i)?s(i):i; return l.protocol===r.protocol&&l.host===r.host
}
}

():function() {
    return function() {
        return !0
    }
}

(), qv=Et.hasStandardBrowserEnv? {
    write(e, t, n, r, s, o) {
        const i=[e+"=" +encodeURIComponent(t)]; P.isNumber(n)&&i.push("expires=" +new Date(n).toGMTString()), P.isString(r)&&i.push("path=" +r), P.isString(s)&&i.push("domain=" +s), o=== !0&&i.push("secure"), document.cookie=i.join("; ")
    }

    , read(e) {
        const t=document.cookie.match(new RegExp("(^|;\\s*)(" +e+")=([^;]*)")); return t?decodeURIComponent(t[3]):null
    }

    , remove(e) {
        this.write(e, "", Date.now()-864e5)
    }
}

: {
    write() {}

    , read() {
        return null
    }

    , remove() {}
}

; function Qv(e) {
    return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function Jv(e, t) {
    return t?e.replace(/\/?\/$/, "")+"/" +t.replace(/^\/+/, ""):e
}

function lh(e, t) {
    return e&& !Qv(t)?Jv(e, t):t
}

const du=e=>e instanceof St? {
    ...e
}

:e; function yr(e, t) {
    t=t|| {}

    ; const n= {}

    ; function r(u, d, f) {
        return P.isPlainObject(u)&&P.isPlainObject(d)?P.merge.call({
            caseless:f
        }

        , u, d):P.isPlainObject(d)?P.merge({}

    , d):P.isArray(d)?d.slice():d
}

function s(u, d, f) {
    if(P.isUndefined(d)) {
        if( !P.isUndefined(u))return r(void 0, u, f)
    }

    else return r(u, d, f)
}

function o(u, d) {
    if( !P.isUndefined(d))return r(void 0, d)
}

function i(u, d) {
    if(P.isUndefined(d)) {
        if( !P.isUndefined(u))return r(void 0, u)
    }

    else return r(void 0, d)
}

function l(u, d, f) {
    if(f in t)return r(u, d); if(f in e)return r(void 0, u)
}

const a= {
    url:o, method:o, data:o, baseURL:i, transformRequest:i, transformResponse:i, paramsSerializer:i, timeout:i, timeoutMessage:i, withCredentials:i, withXSRFToken:i, adapter:i, responseType:i, xsrfCookieName:i, xsrfHeaderName:i, onUploadProgress:i, onDownloadProgress:i, decompress:i, maxContentLength:i, maxBodyLength:i, beforeRedirect:i, transport:i, httpAgent:i, httpsAgent:i, cancelToken:i, socketPath:i, responseEncoding:i, validateStatus:l, headers:(u, d)=>s(du(u), du(d), !0)
}

; return P.forEach(Object.keys(Object.assign({}

        , e, t)), function(d) {
    const f=a[d]||s, h=f(e[d], t[d], d); P.isUndefined(h)&&f !==l||(n[d]=h)
}), n
}

const ah=e=> {
    const t=yr({}

    , e); let {
    data:n, withXSRFToken:r, xsrfHeaderName:s, xsrfCookieName:o, headers:i, auth:l
}

=t; t.headers=i=St.from(i), t.url=nh(lh(t.baseURL, t.url), e.params, e.paramsSerializer), l&&i.set("Authorization", "Basic " +btoa((l.username||"")+":" +(l.password?unescape(encodeURIComponent(l.password)):""))); let a; if(P.isFormData(n)) {
    if(Et.hasStandardBrowserEnv||Et.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0); else if((a=i.getContentType()) !== !1) {
        const[u, ...d]=a?a.split(";").map(f=>f.trim()).filter(Boolean):[]; i.setContentType([u||"multipart/form-data", ...d].join("; "))
    }
}

if(Et.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)), r||r !== !1&&Kv(t.url))) {
    const u=s&&o&&qv.read(o); u&&i.set(s, u)
}

return t
}

, Yv=typeof XMLHttpRequest<"u", Zv=Yv&&function(e) {
    return new Promise(function(n, r) {
            const s=ah(e); let o=s.data; const i=St.from(s.headers).normalize(); let {
                responseType:l, onUploadProgress:a, onDownloadProgress:u
            }

            =s, d, f, h, p, y; function w() {
                p&&p(), y&&y(), s.cancelToken&&s.cancelToken.unsubscribe(d), s.signal&&s.signal.removeEventListener("abort", d)
            }

            let E=new XMLHttpRequest; E.open(s.method.toUpperCase(), s.url, !0), E.timeout=s.timeout; function b() {
                if( !E)return; const L=St.from("getAllResponseHeaders" in E&&E.getAllResponseHeaders()), M= {
                    data: !l||l==="text" ||l==="json" ?E.responseText:E.response, status:E.status, statusText:E.statusText, headers:L, config:e, request:E
                }

                ; ih(function(R) {
                        n(R), w()
                    }

                    , function(R) {
                        r(R), w()
                    }

                    , M), E=null
            }

            "onloadend" in E?E.onloadend=b:E.onreadystatechange=function() {
                !E||E.readyState !==4||E.status===0&& !(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(b)
            }

            , E.onabort=function() {
                E&&(r(new ce("Request aborted", ce.ECONNABORTED, e, E)), E=null)
            }

            , E.onerror=function() {
                r(new ce("Network Error", ce.ERR_NETWORK, e, E)), E=null
            }

            , E.ontimeout=function() {
                let x=s.timeout?"timeout of " +s.timeout+"ms exceeded":"timeout exceeded"; const M=s.transitional||rh; s.timeoutErrorMessage&&(x=s.timeoutErrorMessage), r(new ce(x, M.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED, e, E)), E=null
            }

            , o===void 0&&i.setContentType(null), "setRequestHeader" in E&&P.forEach(i.toJSON(), function(x, M) {
                    E.setRequestHeader(M, x)

                }), P.isUndefined(s.withCredentials)||(E.withCredentials= ! !s.withCredentials), l&&l !=="json" &&(E.responseType=s.responseType), u&&([h, y]=To(u, !0), E.addEventListener("progress", h)), a&&E.upload&&([f, p]=To(a), E.upload.addEventListener("progress", f), E.upload.addEventListener("loadend", p)), (s.cancelToken||s.signal)&&(d=L=> {
                    E&&(r( !L||L.type?new rs(null, e, E):L), E.abort(), E=null)
                }

                , s.cancelToken&&s.cancelToken.subscribe(d), s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort", d))); const S=zv(s.url); if(S&&Et.protocols.indexOf(S)===-1) {
                r(new ce("Unsupported protocol " +S+":", ce.ERR_BAD_REQUEST, e)); return
            }

            E.send(o||null)
        })
}

, Xv=(e, t)=> {
    const {
        length:n
    }

    =e=e?e.filter(Boolean):[]; if(t||n) {
        let r=new AbortController, s; const o=function(u) {
            if( !s) {
                s= !0, l(); const d=u instanceof Error?u:this.reason; r.abort(d instanceof ce?d:new rs(d instanceof Error?d.message:d))
            }
        }

        ; let i=t&&setTimeout(()=> {
                i=null, o(new ce(`timeout $ {
                            t
                        }

                        of ms exceeded`, ce.ETIMEDOUT))
            }

            , t); const l=()=> {
            e&&(i&&clearTimeout(i), i=null, e.forEach(u=> {
                        u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort", o)
                    }), e=null)
        }

        ; e.forEach(u=>u.addEventListener("abort", o)); const {
            signal:a
        }

        =r; return a.unsubscribe=()=>P.asap(l), a
    }
}

, ey=function*(e, t) {
    let n=e.byteLength; if(n<t) {
        yield e; return
    }

    let r=0, s; for(; r<n; )s=r+t, yield e.slice(r, s), r=s
}

, ty=async function*(e, t) {
    for await(const n of ny(e))yield*ey(n, t)
}

, ny=async function*(e) {
    if(e[Symbol.asyncIterator]) {
        yield*e; return
    }

    const t=e.getReader(); try {
        for(; ; ) {
            const {
                done:n, value:r
            }

            =await t.read(); if(n)break; yield r
        }
    }

    finally {
        await t.cancel()
    }
}

, fu=(e, t, n, r)=> {
    const s=ty(e, t); let o=0, i, l=a=> {
        i||(i= !0, r&&r(a))
    }

    ; return new ReadableStream({
        async pull(a) {
            try {
                const {
                    done:u, value:d
                }

                =await s.next(); if(u) {
                    l(), a.close(); return
                }

                let f=d.byteLength; if(n) {
                    let h=o+=f; n(h)
                }

                a.enqueue(new Uint8Array(d))
            }

            catch(u) {
                throw l(u), u
            }
        }

        , cancel(a) {
            return l(a), s.return()
        }
    }

    , {
    highWaterMark:2
})
}

, Zo=typeof fetch=="function" &&typeof Request=="function" &&typeof Response=="function", ch=Zo&&typeof ReadableStream=="function", ry=Zo&&(typeof TextEncoder=="function" ?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())), uh=(e, ...t)=> {
    try {
        return ! !e(...t)
    }

    catch {
        return !1
    }
}

, sy=ch&&uh(()=> {
        let e= !1; const t=new Request(Et.origin, {
            body:new ReadableStream, method:"POST", get duplex() {
                return e= !0, "half"
            }
        }).headers.has("Content-Type"); return e&& !t

}), hu=64*1024, fl=ch&&uh(()=>P.isReadableStream(new Response("").body)), Oo= {
    stream:fl&&(e=>e.body)
}

; Zo&&(e=> {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t=> {
                !Oo[t]&&(Oo[t]=P.isFunction(e[t])?n=>n[t]():(n, r)=> {
                        throw new ce(`Response type '${t}' is not supported`, ce.ERR_NOT_SUPPORT, r)
                    })
            })

    })(new Response); const oy=async e=> {
    if(e==null)return 0; if(P.isBlob(e))return e.size; if(P.isSpecCompliantForm(e))return(await new Request(Et.origin, {
            method:"POST", body:e
        }).arrayBuffer()).byteLength; if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength; if(P.isURLSearchParams(e)&&(e=e+""), P.isString(e))return(await ry(e)).byteLength
}

, iy=async(e, t)=> {
    const n=P.toFiniteNumber(e.getContentLength()); return n??oy(t)
}

, ly=Zo&&(async e=> {
        let {
            url:t, method:n, data:r, signal:s, cancelToken:o, timeout:i, onDownloadProgress:l, onUploadProgress:a, responseType:u, headers:d, withCredentials:f="same-origin", fetchOptions:h
        }

        =ah(e); u=u?(u+"").toLowerCase():"text"; let p=Xv([s, o&&o.toAbortSignal()], i), y; const w=p&&p.unsubscribe&&(()=> {
                p.unsubscribe()

            }); let E; try {
            if(a&&sy&&n !=="get" &&n !=="head" &&(E=await iy(d, r)) !==0) {
                let M=new Request(t, {
                    method:"POST", body:r, duplex:"half"

                }), $; if(P.isFormData(r)&&($=M.headers.get("content-type"))&&d.setContentType($), M.body) {
                const[R, G]=cu(E, To(uu(a))); r=fu(M.body, hu, R, G)
            }
        }

        P.isString(f)||(f=f?"include":"omit"); const b="credentials" in Request.prototype; y=new Request(t, {
            ...h, signal:p, method:n.toUpperCase(), headers:d.normalize().toJSON(), body:r, duplex:"half", credentials:b?f:void 0

        }); let S=await fetch(y); const L=fl&&(u==="stream" ||u==="response"); if(fl&&(l||L&&w)) {
        const M= {}

        ; ["status", "statusText", "headers"].forEach(U=> {
                M[U]=S[U]

            }); const $=P.toFiniteNumber(S.headers.get("content-length")), [R, G]=l&&cu($, To(uu(l), !0))||[]; S=new Response(fu(S.body, hu, R, ()=> {
                    G&&G(), w&&w()
                }), M)
    }

    u=u||"text"; let x=await Oo[P.findKey(Oo, u)||"text"](S, e); return !L&&w&&w(), await new Promise((M, $)=> {
            ih(M, $, {
                data:x, headers:St.from(S.headers), status:S.status, statusText:S.statusText, config:e, request:y
            })
    })
}

catch(b) {
    throw w&&w(), b&&b.name==="TypeError" &&/fetch/i.test(b.message)?Object.assign(new ce("Network Error", ce.ERR_NETWORK, e, y), {
        cause:b.cause||b
    }):ce.from(b, b&&b.code, e, y)
}

}), hl= {
    http:Ev, xhr:Zv, fetch:ly
}

; P.forEach(hl, (e, t)=> {
        if(e) {
            try {
                Object.defineProperty(e, "name", {
                    value:t
                })
        }

        catch {}

        Object.defineProperty(e, "adapterName", {
            value:t
        })
}

}); const pu=e=>`- $ {
    e
}

`, ay=e=>P.isFunction(e)||e===null||e=== !1, dh= {
    getAdapter:e=> {
        e=P.isArray(e)?e:[e]; const {
            length:t
        }

        =e; let n, r; const s= {}

        ; for(let o=0; o<t; o++) {
            n=e[o]; let i; if(r=n, !ay(n)&&(r=hl[(i=String(n)).toLowerCase()], r===void 0))throw new ce(`Unknown adapter '${i}' `); if(r)break; s[i||"#" +o]=r
        }

        if( !r) {
            const o=Object.entries(s).map(([l, a])=>`adapter $ {
                    l
                }

                `+(a=== !1?"is not supported by the environment":"is not available in the build")); let i=t?o.length>1?`since : `+o.map(pu).join(` `):" " +pu(o[0]):"as no adapter specified"; throw new ce("There is no suitable adapter to dispatch the request " +i, "ERR_NOT_SUPPORT")
        }

        return r
    }

    , adapters:hl
}

; function Ei(e) {
    if(e.cancelToken&&e.cancelToken.throwIfRequested(), e.signal&&e.signal.aborted)throw new rs(null, e)
}

function mu(e) {
    return Ei(e), e.headers=St.from(e.headers), e.data=wi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !==-1&&e.headers.setContentType("application/x-www-form-urlencoded", !1), dh.getAdapter(e.adapter||Gs.adapter)(e).then(function(r) {
            return Ei(e), r.data=wi.call(e, e.transformResponse, r), r.headers=St.from(r.headers), r
        }

        , function(r) {
            return oh(r)||(Ei(e), r&&r.response&&(r.response.data=wi.call(e, e.transformResponse, r.response), r.response.headers=St.from(r.response.headers))), Promise.reject(r)
        })
}

const fh="1.7.7", oa= {}

; ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t)=> {
        oa[e]=function(r) {
            return typeof r===e||"a" +(t<1?"n ":" ")+e
        }

    }); const gu= {}

; oa.transitional=function(t, n, r) {
    function s(o, i) {
        return"[Axios v" +fh+"] Transitional option '" +o+"'" +i+(r?". " +r:"")
    }

    return(o, i, l)=> {
        if(t=== !1)throw new ce(s(i, " has been removed" +(n?" in " +n:"")), ce.ERR_DEPRECATED); return n&& !gu[i]&&(gu[i]= !0, console.warn(s(i, " has been deprecated since v" +n+" and will be removed in the near future"))), t?t(o, i, l): !0
    }
}

; function cy(e, t, n) {
    if(typeof e !="object")throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE); const r=Object.keys(e); let s=r.length; for(; s-- >0; ) {
        const o=r[s], i=t[o]; if(i) {
            const l=e[o], a=l===void 0||i(l, o, e); if(a !== !0)throw new ce("option " +o+" must be " +a, ce.ERR_BAD_OPTION_VALUE); continue
        }

        if(n !== !0)throw new ce("Unknown option " +o, ce.ERR_BAD_OPTION)
    }
}

const pl= {
    assertOptions:cy, validators:oa
}

, Rn=pl.validators; class gr {
    constructor(t) {
        this.defaults=t, this.interceptors= {
            request:new lu, response:new lu
        }
    }

    async request(t, n) {
        try {
            return await this._request(t, n)
        }

        catch(r) {
            if(r instanceof Error) {
                let s; Error.captureStackTrace?Error.captureStackTrace(s= {}):s=new Error; const o=s.stack?s.stack.replace(/^.+\n/, ""):""; try {
                    r.stack?o&& !String(r.stack).endsWith (o.replace(/^.+\n.+\n/, ""))&&(r.stack+=` `+o):r.stack=o
                }

                catch {}
            }

            throw r
        }
    }

    _request(t, n) {
        typeof t=="string" ?(n=n|| {}

            , n.url=t):n=t|| {}

        , n=yr(this.defaults, n); const {
            transitional:r, paramsSerializer:s, headers:o
        }

        =n; r !==void 0&&pl.assertOptions(r, {
            silentJSONParsing:Rn.transitional(Rn.boolean), forcedJSONParsing:Rn.transitional(Rn.boolean), clarifyTimeoutError:Rn.transitional(Rn.boolean)
        }

        , !1), s !=null&&(P.isFunction(s)?n.paramsSerializer= {
            serialize:s
        }

        :pl.assertOptions(s, {
            encode:Rn.function, serialize:Rn.function
        }

        , !0)), n.method=(n.method||this.defaults.method||"get").toLowerCase(); let i=o&&P.merge(o.common, o[n.method]); o&&P.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y=> {
        delete o[y]

    }), n.headers=St.concat(i, o); const l=[]; let a= !0; this.interceptors.request.forEach(function(w) {
        typeof w.runWhen=="function" &&w.runWhen(n)=== !1||(a=a&&w.synchronous, l.unshift(w.fulfilled, w.rejected))

    }); const u=[]; this.interceptors.response.forEach(function(w) {
        u.push(w.fulfilled, w.rejected)

    }); let d, f=0, h; if( !a) {
    const y=[mu.bind(this), void 0]; for(y.unshift.apply(y, l), y.push.apply(y, u), h=y.length, d=Promise.resolve(n); f<h; )d=d.then(y[f++], y[f++]); return d
}

h=l.length; let p=n; for(f=0; f<h; ) {
    const y=l[f++], w=l[f++]; try {
        p=y(p)
    }

    catch(E) {
        w.call(this, E); break
    }
}

try {
    d=mu.call(this, p)
}

catch(y) {
    return Promise.reject(y)
}

for(f=0, h=u.length; f<h; )d=d.then(u[f++], u[f++]); return d
}

getUri(t) {
    t=yr(this.defaults, t); const n=lh(t.baseURL, t.url); return nh(n, t.params, t.paramsSerializer)
}
}

P.forEach(["delete", "get", "head", "options"], function(t) {
        gr.prototype[t]=function(n, r) {
            return this.request(yr(r|| {}

                    , {
                    method:t, url:n, data:(r|| {}).data
                }))
    }

}); P.forEach(["post", "put", "patch"], function(t) {
        function n(r) {
            return function(o, i, l) {
                return this.request(yr(l|| {}

                        , {
                        method:t, headers:r? {
                            "Content-Type":"multipart/form-data"
                        }

                        : {}

                        , url:o, data:i
                    }))
        }
    }

    gr.prototype[t]=n(), gr.prototype[t+"Form"]=n( !0)

}); class ia {
    constructor(t) {
        if(typeof t !="function")throw new TypeError("executor must be a function."); let n; this.promise=new Promise(function(o) {
                n=o

            }); const r=this; this.promise.then(s=> {
                if( !r._listeners)return; let o=r._listeners.length; for(; o-- >0; )r._listeners[o](s); r._listeners=null

            }), this.promise.then=s=> {
            let o; const i=new Promise(l=> {
                    r.subscribe(l), o=l

                }).then(s); return i.cancel=function() {
                r.unsubscribe(o)
            }

            , i
        }

        , t(function(o, i, l) {
                r.reason||(r.reason=new rs(o, i, l), n(r.reason))
            })
    }

    throwIfRequested() {
        if(this.reason)throw this.reason
    }

    subscribe(t) {
        if(this.reason) {
            t(this.reason); return
        }

        this._listeners?this._listeners.push(t):this._listeners=[t]
    }

    unsubscribe(t) {
        if( !this._listeners)return; const n=this._listeners.indexOf(t); n !==-1&&this._listeners.splice(n, 1)
    }

    toAbortSignal() {
        const t=new AbortController, n=r=> {
            t.abort(r)
        }

        ; return this.subscribe(n), t.signal.unsubscribe=()=>this.unsubscribe(n), t.signal
    }

    static source() {
        let t; return {
            token:new ia(function(s) {
                    t=s
                }), cancel:t
        }
    }
}

function uy(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function dy(e) {
    return P.isObject(e)&&e.isAxiosError=== !0
}

const ml= {
    Continue:100, SwitchingProtocols:101, Processing:102, EarlyHints:103, Ok:200, Created:201, Accepted:202, NonAuthoritativeInformation:203, NoContent:204, ResetContent:205, PartialContent:206, MultiStatus:207, AlreadyReported:208, ImUsed:226, MultipleChoices:300, MovedPermanently:301, Found:302, SeeOther:303, NotModified:304, UseProxy:305, Unused:306, TemporaryRedirect:307, PermanentRedirect:308, BadRequest:400, Unauthorized:401, PaymentRequired:402, Forbidden:403, NotFound:404, MethodNotAllowed:405, NotAcceptable:406, ProxyAuthenticationRequired:407, RequestTimeout:408, Conflict:409, Gone:410, LengthRequired:411, PreconditionFailed:412, PayloadTooLarge:413, UriTooLong:414, UnsupportedMediaType:415, RangeNotSatisfiable:416, ExpectationFailed:417, ImATeapot:418, MisdirectedRequest:421, UnprocessableEntity:422, Locked:423, FailedDependency:424, TooEarly:425, UpgradeRequired:426, PreconditionRequired:428, TooManyRequests:429, RequestHeaderFieldsTooLarge:431, UnavailableForLegalReasons:451, InternalServerError:500, NotImplemented:501, BadGateway:502, ServiceUnavailable:503, GatewayTimeout:504, HttpVersionNotSupported:505, VariantAlsoNegotiates:506, InsufficientStorage:507, LoopDetected:508, NotExtended:510, NetworkAuthenticationRequired:511
}

; Object.entries(ml).forEach(([e, t])=> {
        ml[t]=e

    }); function hh(e) {
    const t=new gr(e), n=zf(gr.prototype.request, t); return P.extend(n, gr.prototype, t, {
        allOwnKeys: !0

    }), P.extend(n, t, null, {
    allOwnKeys: !0

}), n.create=function(s) {
    return hh(yr(e, s))
}

, n
}

const Ke=hh(Gs); Ke.Axios=gr; Ke.CanceledError=rs; Ke.CancelToken=ia; Ke.isCancel=oh; Ke.VERSION=fh; Ke.toFormData=Yo; Ke.AxiosError=ce; Ke.Cancel=Ke.CanceledError; Ke.all=function(t) {
    return Promise.all(t)
}

; Ke.spread=uy; Ke.isAxiosError=dy; Ke.mergeConfig=yr; Ke.AxiosHeaders=St; Ke.formToJSON=e=>sh(P.isHTMLForm(e)?new FormData(e):e); Ke.getAdapter=dh.getAdapter; Ke.HttpStatusCode=ml; Ke.default=Ke; const fy="http://localhost:8000/api", hy=async()=> {
    const {
        data:e
    }

    =await Ke.get(`$ {
            fy
        }

        /shop/products`); return e
}

, py=()=>F2({
    queryKey:["products"], queryFn:hy, staleTime:1e3*60*5

}), my=()=> {
    const {
        data:e, error:t, isLoading:n, refetch:r
    }

    =py(); return {
        data:e, error:t, isLoading:n, refetch:r
    }
}

, gy= {
    class:"flex flex-col justify-center items-center"
}

, by= {
    key:0
}

, _y= {
    key:1
}

, vy= {
    key:2
}

, yy= {
    class:"grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-accent grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5"
}

, wy= {
    __name:"HomeProducts", setup(e) {
        const {
            data:t, error:n, isLoading:r
        }

        =my(); return Ze(()=>t.value, (s, o)=> {
                console.log(s)

            }), (s, o)=> {
            var i; return J(), X("div", gy, [me(r)?(J(), X("div", by, "Loading products...")):Xe("", !0), me(n)?(J(), X("div", _y, "Error fetching products: " +F(me(n).message), 1)):(J(), X("div", vy, [c("div", yy, [(J( !0), X(we, null, yn((i=me(t))==null?void 0:i.data, l=>(J(), X("li", {
                                                class:"list-none", key:l.id
                                            }

                                            , [B(mn, {
                                                product:l
                                            }

                                            , null, 8, ["product"])]))), 128))])]))])
}
}
}

, Ey= {}

, Sy= {
    class:"grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-10 2xl:gap-16 text-accent font-extrabold text-2xl"
}

, xy= {
    class:"aspect-w-1 aspect-h-1 overflow-hidden relative"
}

, Cy= {
    class:"transition-transform duration-[5000ms] ease-in-out hover:scale-110"
}

, Ly= {
    class:"absolute bottom-0 start-0 m-12"
}

, Ty= {
    class:"aspect-w-1 aspect-h-1 overflow-hidden relative"
}

, Oy= {
    class:"transition-transform duration-[5000ms] ease-in-out hover:scale-110"
}

, Ay= {
    class:"absolute bottom-0 start-0 m-12"
}

, Ry= {
    class:"aspect-w-1 aspect-h-1 overflow-hidden relative"
}

, Iy= {
    class:"transition-transform duration-[5000ms] ease-in-out hover:scale-110"
}

, ky= {
    class:"absolute bottom-0 start-0 m-12"
}

, My= {
    class:"aspect-w-1 aspect-h-1 overflow-hidden relative"
}

, Py= {
    class:"transition-transform duration-[5000ms] ease-in-out hover:scale-110"
}

, Ny= {
    class:"absolute bottom-0 start-0 m-12"
}

; function Fy(e, t) {
    return J(), X("div", Sy, [c("div", xy, [c("div", Cy, [t[0]||(t[0]=c("img", {
                        src:"//moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=997", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=200 200w,
                        //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=300 300w,
                        //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=400 400w,
                        //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=500 500w,
                        //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=600 600w,
                        //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_2_edited.jpg?v=1725896315&width=800 800w
                        `, width:"997", height:"974", loading:"lazy", sizes:"(max-width: 699px) 100vw, 100vw", class:"filter brightness-75 h-full w-full object-cover", draggable:"false"
                    }

                    , null, -1)), c("h1", Ly, F(e.$t("categories.tShirt")), 1)])]), c("div", Ty, [c("div", Oy, [t[1]||(t[1]=c("img", {
                    src:"//moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=818", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=200 200w,
                    //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=300 300w,
                    //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=400 400w,
                    //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=500 500w,
                    //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=600 600w,
                    //moremoneymorelove.de/cdn/shop/files/MS_SV_MMML_Still_Insta_5_edited.jpg?v=1725896349&width=800 800w
                    `, width:"818", height:"688", loading:"lazy", sizes:"(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 50vw", class:"filter brightness-75 h-full w-full object-cover", draggable:"false"
                }

                , null, -1)), c("h1", Ay, F(e.$t("categories.zipper")), 1)])]), c("div", Ry, [c("div", Iy, [t[2]||(t[2]=c("img", {
                src:"//moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=4096", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=200   200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=300   300w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=400   400w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=500   500w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=600   600w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=800   800w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=1000 1000w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=1200 1200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=1400 1400w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=1600 1600w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=1800 1800w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=2000 2000w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=2200 2200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image.jpg?v=1725896759&width=2400 2400w
                `, width:"4096", height:"4096", loading:"lazy", sizes:"(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 50vw", class:"filter brightness-75 h-full w-full object-cover", draggable:"false"
            }

            , null, -1)), c("h1", ky, F(e.$t("categories.denim")), 1)])]), c("div", My, [c("div", Py, [t[3]||(t[3]=c("img", {
                src:"//moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=3276", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=200   200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=300   300w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=400   400w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=500   500w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=600   600w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=800   800w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=1000 1000w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=1200 1200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=1400 1400w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=1600 1600w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=1800 1800w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=2000 2000w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=2200 2200w,
                //moremoneymorelove.de/cdn/shop/files/compressed_large_image_2.jpg?v=1725897333&width=2400 2400w
                `, width:"3276", height:"4096", loading:"lazy", sizes:"(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 50vw", class:"filter brightness-75 h-full w-full object-cover", draggable:"false"
            }

            , null, -1)), c("h1", Ny, F(e.$t("categories.jackets")), 1)])])])
}

const Dy=dt(Ey, [["render", Fy]]);

/**
 * Vue 3 Carousel 0.3.4
 * (c) 2024
 * @license MIT
 */
const Qe= {
    itemsToShow:1, itemsToScroll:1, modelValue:0, transition:300, autoplay:0, snapAlign:"center", wrapAround: !1, throttle:16, pauseAutoplayOnHover: !1, mouseDrag: !0, touchDrag: !0, dir:"ltr", breakpoints:void 0, i18n: {
        ariaNextSlide:"Navigate to next slide", ariaPreviousSlide:"Navigate to previous slide", ariaNavigateToSlide:"Navigate to slide {slideNumber}", ariaGallery:"Gallery", itemXofY:"Item {currentSlide} of {slidesCount}", iconArrowUp:"Arrow pointing upwards", iconArrowDown:"Arrow pointing downwards", iconArrowRight:"Arrow pointing to the right", iconArrowLeft:"Arrow pointing to the left"
    }
}

, bu= {
    itemsToShow: {
        default:Qe.itemsToShow, type:Number
    }

    , itemsToScroll: {
        default:Qe.itemsToScroll, type:Number
    }

    , wrapAround: {
        default:Qe.wrapAround, type:Boolean
    }

    , throttle: {
        default:Qe.throttle, type:Number
    }

    , snapAlign: {
        default:Qe.snapAlign, validator(e) {
            return["start", "end", "center", "center-even", "center-odd"].includes(e)
        }
    }

    , transition: {
        default:Qe.transition, type:Number
    }

    , breakpoints: {
        default:Qe.breakpoints, type:Object
    }

    , autoplay: {
        default:Qe.autoplay, type:Number
    }

    , pauseAutoplayOnHover: {
        default:Qe.pauseAutoplayOnHover, type:Boolean
    }

    , modelValue: {
        default:void 0, type:Number
    }

    , mouseDrag: {
        default:Qe.mouseDrag, type:Boolean
    }

    , touchDrag: {
        default:Qe.touchDrag, type:Boolean
    }

    , dir: {
        default:Qe.dir, validator(e) {
            return["rtl", "ltr"].includes(e)
        }
    }

    , i18n: {
        default:Qe.i18n, type:Object
    }

    , settings: {
        default() {
            return {}
        }

        , type:Object
    }
}

; function $y({
    config:e, slidesCount:t

}) {
    const {
        snapAlign:n, wrapAround:r, itemsToShow:s=1
    }

    =e; if(r)return Math.max(t-1, 0); let o; switch(n) {
        case"start":o=t-s; break; case"end":o=t-1; break; case"center":case"center-odd":o=t-Math.ceil((s-.5)/2); break; case"center-even":o=t-Math.ceil(s/2); break; default:o=0; break
    }

    return Math.max(o, 0)
}

function jy({
    config:e, slidesCount:t

}) {
    const {
        wrapAround:n, snapAlign:r, itemsToShow:s=1
    }

    =e; let o=0; if(n||s>t)return o; switch(r) {
        case"start":o=0; break; case"end":o=s-1; break; case"center":case"center-odd":o=Math.floor((s-1)/2); break; case"center-even":o=Math.floor((s-2)/2); break; default:o=0; break
    }

    return o
}

function gl({
    val:e, max:t, min:n

}) {
    return t<n?e:Math.min(Math.max(e, n), t)
}

function Hy({
    config:e, currentSlide:t, slidesCount:n

}) {
    const {
        snapAlign:r, wrapAround:s, itemsToShow:o=1
    }

    =e; let i=t; switch(r) {
        case"center":case"center-odd":i-=(o-1)/2; break; case"center-even":i-=(o-2)/2; break; case"end":i-=o-1; break
    }

    return s?i:gl({
        val:i, max:n-o, min:0
    })
}

function ph(e) {
    return e?e.reduce((t, n)=> {
            var r; return n.type===we?[...t, ...ph(n.children)]:((r=n.type)===null||r===void 0?void 0:r.name)==="CarouselSlide" ?[...t, n]:t
        }

        , []):[]
}

function bl({
    val:e, max:t, min:n=0

}) {
    return e>t?bl({
        val:e-(t+1), max:t, min:n

    }):e<n?bl({
    val:e+(t+1), max:t, min:n
}):e
}

function Uy(e, t) {
    let n; return t?function(...r) {
        const s=this; n||(e.apply(s, r), n= !0, setTimeout(()=>n= !1, t))
    }

    :e
}

function By(e, t) {
    let n; return function(...r) {
        n&&clearTimeout(n), n=setTimeout(()=> {
                e(...r), n=null
            }

            , t)
    }
}

function Vy(e="", t= {}) {
    return Object.entries(t).reduce((n, [r, s])=>n.replace(` {
                $ {
                    r
                }
            }

            `, String(s)), e)
}

var zy=Jn({
    name:"ARIA", setup() {
        const e=$e("config", zt(Object.assign({}

                , Qe))), t=$e("currentSlide", ne(0)), n=$e("slidesCount", ne(0)); return()=>Be("div", {
        class:["carousel__liveregion", "carousel__sr-only"], "aria-live":"polite", "aria-atomic":"true"
    }

    , Vy(e.i18n.itemXofY, {
        currentSlide:t.value+1, slidesCount:n.value
    }))
}

}), Wy=Jn({
    name:"Carousel", props:bu, setup(e, {
        slots:t, emit:n, expose:r

    }) {
    var s; const o=ne(null), i=ne([]), l=ne(0), a=ne(0), u=zt(Object.assign({}

        , Qe)); let d=Object.assign({}

, Qe), f; const h=ne((s=e.modelValue) !==null&&s !==void 0?s:0), p=ne(0), y=ne(0), w=ne(0), E=ne(0); let b, S; At("config", u), At("slidesCount", a), At("currentSlide", h), At("maxSlide", w), At("minSlide", E), At("slideWidth", l); function L() {
    f=Object.assign({}

    , e.breakpoints), d=Object.assign(Object.assign(Object.assign({}

        , d), e), {
i18n:Object.assign(Object.assign({}

    , d.i18n), e.i18n), breakpoints:void 0
}), M(d)
}

function x() {
    if( !f|| !Object.keys(f).length)return; const g=Object.keys(f).map(D=>Number(D)).sort((D, N)=>+N-+D); let A=Object.assign({}

    , d); g.some(D=> {
        const N=window.matchMedia(`(min-width: $ {
                    D
                }

                px)`).matches; return N&&(A=Object.assign(Object.assign({}

                , A), f[D])), N
}), M(A)
}

function M(g) {
    Object.entries(g).forEach(([A, D])=>u[A]=D)
}

const $=By(()=> {
        x(), G(), R()
    }

    , 16); function R() {
    if( !o.value)return; const g=o.value.getBoundingClientRect(); l.value=g.width/u.itemsToShow
}

function G() {
    a.value<=0||(y.value=Math.ceil((a.value-1)/2), w.value=$y({
            config:u, slidesCount:a.value

        }), E.value=jy({
        config:u, slidesCount:a.value

    }), u.wrapAround||(h.value=gl({
        val:h.value, max:w.value, min:E.value
    })))
}

Yn(()=> {
        Hs(()=>R()), setTimeout(()=>R(), 1e3), x(), it(), window.addEventListener("resize", $, {
            passive: !0
        }), n("init")

}), $o(()=> {
        S&&clearTimeout(S), b&&clearInterval(b), window.removeEventListener("resize", $, {
            passive: !0
        })

}); let U= !1; const ee= {
    x:0, y:0
}

, re= {
    x:0, y:0
}

, V=zt({
    x:0, y:0

}), le=ne( !1), Me=ne( !1), ot=()=> {
    le.value= !0
}

, Ie=()=> {
    le.value= !1
}

; function ge(g) {
    ["INPUT", "TEXTAREA", "SELECT"].includes(g.target.tagName)||(U=g.type==="touchstart", U||g.preventDefault(), !( !U&&g.button !==0||Pe.value)&&(ee.x=U?g.touches[0].clientX:g.clientX, ee.y=U?g.touches[0].clientY:g.clientY, document.addEventListener(U?"touchmove":"mousemove", he, !0), document.addEventListener(U?"touchend":"mouseup", je, !0)))
}

const he=Uy(g=> {
        Me.value= !0, re.x=U?g.touches[0].clientX:g.clientX, re.y=U?g.touches[0].clientY:g.clientY; const A=re.x-ee.x, D=re.y-ee.y; V.y=D, V.x=A
    }

    , u.throttle); function je() {
    const g=u.dir==="rtl" ?-1:1, A=Math.sign(V.x)*.4, D=Math.round(V.x/l.value+A)*g; if(D&& !U) {
        const N=m=> {
            window.removeEventListener("click", N, !0)
        }

        ; window.addEventListener("click", N, !0)
    }

    nt(h.value-D), V.x=0, V.y=0, Me.value= !1, document.removeEventListener(U?"touchmove":"mousemove", he, !0), document.removeEventListener(U?"touchend":"mouseup", je, !0)
}

function it() {
    !u.autoplay||u.autoplay<=0||(b=setInterval(()=> {
                u.pauseAutoplayOnHover&&le.value||ft()
            }

            , u.autoplay))
}

function tt() {
    b&&(clearInterval(b), b=null), it()
}

const Pe=ne( !1); function nt(g) {
    const A=u.wrapAround?g:gl({
        val:g, max:w.value, min:E.value

    }); h.value===A||Pe.value||(n("slide-start", {
        slidingToIndex:g, currentSlideIndex:h.value, prevSlideIndex:p.value, slidesCount:a.value

    }), Pe.value= !0, p.value=h.value, h.value=A, S=setTimeout(()=> {
        if(u.wrapAround) {
            const D=bl({
                val:A, max:w.value, min:0

            }); D !==h.value&&(h.value=D, n("loop", {
                currentSlideIndex:h.value, slidingToIndex:g
            }))
}

n("update:modelValue", h.value), n("slide-end", {
    currentSlideIndex:h.value, prevSlideIndex:p.value, slidesCount:a.value
}), Pe.value= !1, tt()
}

, u.transition))
}

function ft() {
    nt(h.value+u.itemsToScroll)
}

function Ht() {
    nt(h.value-u.itemsToScroll)
}

const qe= {
    slideTo:nt, next:ft, prev:Ht
}

; At("nav", qe), At("isSliding", Pe); const H=xe(()=>Hy({
        config:u, currentSlide:h.value, slidesCount:a.value

    })); At("slidesToScroll", H); const K=xe(()=> {
        const g=u.dir==="rtl" ?-1:1, A=H.value*l.value*g; return {
            transform:`translateX($ {
                    V.x-A
                }

                px)`, transition:`$ {
                Pe.value?u.transition:0
            }

            ms`, margin:u.wrapAround?`0 -$ {
                a.value*l.value
            }

            px`:"", width:"100%"
        }

    }); function W() {
    L(), x(), G(), R(), tt()
}

Object.keys(bu).forEach(g=> {
        ["modelValue"].includes(g)||Ze(()=>e[g], W)

    }), Ze(()=>e.modelValue, g=> {
        g !==h.value&&nt(Number(g))

    }), Ze(a, G), n("before-init"), L(); const Y= {
    config:u, slidesCount:a, slideWidth:l, next:ft, prev:Ht, slideTo:nt, currentSlide:h, maxSlide:w, minSlide:E, middleSlide:y
}

; r({
    updateBreakpointsConfigs:x, updateSlidesData:G, updateSlideWidth:R, initDefaultConfigs:L, restartCarousel:W, slideTo:nt, next:ft, prev:Ht, nav:qe, data:Y

}); const pe=t.default||t.slides, Ce=t.addons, _=zt(Y); return()=> {
    const g=ph(pe==null?void 0:pe(_)), A=(Ce==null?void 0:Ce(_))||[]; g.forEach((v, O)=>v.props.index=O); let D=g; if(u.wrapAround) {
        const v=g.map((k, j)=>an(k, {
                index:-g.length+j, isClone: !0, key:`clone-before-$ {
                    j
                }

                `

            })), O=g.map((k, j)=>an(k, {
            index:g.length+j, isClone: !0, key:`clone-after-$ {
                j
            }

            `
        })); D=[...v, ...g, ...O]
}

i.value=g, a.value=Math.max(g.length, 1); const N=Be("ol", {
    class:"carousel__track", style:K.value, onMousedownCapture:u.mouseDrag?ge:null, onTouchstartPassiveCapture:u.touchDrag?ge:null
}

, D), m=Be("div", {
    class:"carousel__viewport"
}

, N); return Be("section", {
    ref:o, class: {
        carousel: !0, "is-sliding":Pe.value, "is-dragging":Me.value, "is-hover":le.value, "carousel--rtl":u.dir==="rtl"
    }

    , dir:u.dir, "aria-label":u.i18n.ariaGallery, tabindex:"0", onMouseenter:ot, onMouseleave:Ie
}

, [m, A, Be(zy)])
}
}

}), _l; (function(e) {
        e.arrowUp="arrowUp", e.arrowDown="arrowDown", e.arrowRight="arrowRight", e.arrowLeft="arrowLeft"

    })(_l||(_l= {})); const Gy= {
    arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z", arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z", arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z", arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}

; function Ky(e) {
    return e in _l
}

const vl=e=> {
    const t=$e("config", zt(Object.assign({}

            , Qe))), n=String(e.name), r=`icon$ {
    n.charAt(0).toUpperCase()+n.slice(1)
}

`; if( !n||typeof n !="string" || !Ky(n))return; const s=Gy[n], o=Be("path", {
    d:s

}), i=t.i18n[r]||e.title||n, l=Be("title", i); return Be("svg", {
    class:"carousel__icon", viewBox:"0 0 24 24", role:"img", "aria-label":i
}

, [l, o])
}

; vl.props= {
    name:String, title:String
}

; const qy=(e, {
    slots:t, attrs:n

})=> {
    const {
        next:r, prev:s
    }

    =t|| {}

    , o=$e("config", zt(Object.assign({}

            , Qe))), i=$e("maxSlide", ne(1)), l=$e("minSlide", ne(1)), a=$e("currentSlide", ne(1)), u=$e("nav", {}), {
dir:d, wrapAround:f, i18n:h
}

=o, p=d==="rtl", y=Be("button", {
    type:"button", class:["carousel__prev", !f&&a.value<=l.value&&"carousel__prev--disabled", n==null?void 0:n.class], "aria-label":h.ariaPreviousSlide, onClick:u.prev
}

, (s==null?void 0:s())||Be(vl, {
    name:p?"arrowRight":"arrowLeft"

})), w=Be("button", {
    type:"button", class:["carousel__next", !f&&a.value>=i.value&&"carousel__next--disabled", n==null?void 0:n.class], "aria-label":h.ariaNextSlide, onClick:u.next
}

, (r==null?void 0:r())||Be(vl, {
    name:p?"arrowLeft":"arrowRight"
})); return[y, w]
}

; var Qy=Jn({
    name:"CarouselSlide", props: {
        index: {
            type:Number, default:1
        }

        , isClone: {
            type:Boolean, default: !1
        }
    }

    , setup(e, {
        slots:t

    }) {
    const n=$e("config", zt(Object.assign({}

            , Qe))), r=$e("currentSlide", ne(0)), s=$e("slidesToScroll", ne(0)), o=$e("isSliding", ne( !1)), i=xe(()=>e.index===r.value), l=xe(()=>e.index===r.value-1), a=xe(()=>e.index===r.value+1), u=xe(()=> {
        const d=Math.floor(s.value), f=Math.ceil(s.value+n.itemsToShow-1); return e.index>=d&&e.index<=f

    }); return()=> {
    var d; return Be("li", {
        style: {
            width:`$ {
                100/n.itemsToShow
            }

            %`
        }

        , class: {
            carousel__slide: !0, "carousel__slide--clone":e.isClone, "carousel__slide--visible":u.value, "carousel__slide--active":i.value, "carousel__slide--prev":l.value, "carousel__slide--next":a.value, "carousel__slide--sliding":o.value
        }

        , "aria-hidden": !u.value
    }

    , (d=t.default)===null||d===void 0?void 0:d.call(t, {
        isActive:i.value, isClone:e.isClone, isPrev:l.value, isNext:a.value, isSliding:o.value, isVisible:u.value
    }))
}
}

}); const Jy= {
    class:"overflow-hidden"
}

, Yy= {
    key:0, class:"text-3xl font-extrabold text-center mb-12"
}

, Zy= {
    class:"carousel__item"
}

, yl= {
    __name:"HomeCarousel", props: {
        title:String
    }

    , setup(e) {
        const t= {
            itemsToShow:3, itemsToScroll:4, snapAlign:"center"
        }

        , n= {
            640: {
                itemsToShow:1, itemsToScroll:1
            }

            , 768: {
                itemsToShow:2, itemsToScroll:2
            }

            , 1024: {
                itemsToShow:4, itemsToScroll:4
            }
        }

        ; return(r, s)=>(J(), X("div", Jy, [e.title?(J(), X("h1", Yy, F(e.title), 1)):Xe("", !0), B(me(Wy), $d(t, {
                        breakpoints:n, class:"vue-carousel"

                    }), {
                addons:ae(()=>[B(me(qy))]), default:ae(()=>[(J(), X(we, null, yn(20, o=>B(me(Qy), {
                                    key:o
                                }

                                , {
                                default:ae(()=>[c("div", Zy, [B(mn)])]), _:2
                            }

                            , 1024)), 64))]), _:1
    }

    , 16)]))
}
}

, Xy= {
    class:"flex flex-col justify-center items-center"
}

, ew= {
    class:"view-all text-xs"
}

, tw= {
    class:"flex flex-col justify-center items-center"
}

, nw= {
    class:"view-all text-xs"
}

, rw= {
    __name:"Home", setup(e) {
        return(t, n)=>(J(), X(we, null, [B(i2), B(wy), c("div", Xy, [c("div", ew, F(t.$t("buttons.viewAll")), 1)]), B(Dy), n[0]||(n[0]=c("hr", {
                        class:"text-gray"
                    }

                    , null, -1)), B(yl, {
                title:"JOGGER"

            }), B(yl, {
            title:"JOGGER"
        }), c("div", tw, [c("div", nw, F(t.$t("buttons.viewAll")), 1)])], 64))
}
}

, sw= {
    key:0, class:"bg-main px-5 py-2 flex items-center justify-between fixed bottom-0 text-sm w-full tracking-normal", "aria-label":"Cookie notification"
}

, ow= {
    class:"text-accent"
}

, iw= {
    __name:"Cookies", setup(e) {
        const t=ne( !1); Yn(()=> {
                t.value=localStorage.getItem("cookiesAccepted")==="true"

            }); const n=()=> {
            t.value= !0, localStorage.setItem("cookiesAccepted", "true")
        }

        ; return(r, s)=> {
            const o=Kt("router-link"); return t.value?Xe("", !0):(J(), X("div", sw, [c("div", ow, [s[1]||(s[1]=ue(" Diese Website verwendet Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website erhalten. ")), B(o, {
                            to:"/datenschutzerklarung", class:"underline opacity-60"
                        }

                        , {
                        default:ae(()=>s[0]||(s[0]=[ue(" Mehr erfahren ")])), _:1

                    })]), c("button", {
                onClick:n, class:"bg-accent px-3 py-2 rounded border-0"
            }

            , " Verstanden ")]))
}
}
}

, lw= {
    class:"min-h-full"
}

, aw= {
    class:"p-4 md:p-8 2xl:p-16 grid gap-4 md:gap-8 2xl:gap-16 bg-accent tracking-normal min-h-screen"
}

, cw= {
    __name:"AppLayout", setup(e) {
        return(t, n)=> {
            const r=Kt("router-view"); return J(), X(we, null, [c("div", lw, [B(q_), c("main", aw, [B(r)])]), B(iw), B(n2)], 64)
        }
    }
}

, uw= {}

, dw= {
    class:"flex justify-center items-center flex-col w-full h-full"
}

; function fw(e, t) {
    return J(), X("div", dw, t[0]||(t[0]=[qr('<h1 class="text-3xl font-extrabold text-center mb-12">ABOUT US</h1><p class="text-pretty md:w-1/2 py-4 text-sm leading-relaxed text-start"> In 2020, we started with a small idea: to unite the most powerful forces in the world, Money and Love. That’s how our movement began. Since then, we have grown into more than just a community—we&#39;ve become a family. With our unique prints and styles, we have firmly established ourselves in the German streetwear scene. And we’re just getting started. </p><p class="text-pretty md:w-1/2 py-4 text-sm leading-relaxed text-start"> Our mission is to grow with you, more and more, and to build our movement together. We are committed to constantly challenging ourselves to set new standards in design, cut, and materials with every collection. In doing so, we strive to never compromise on quality. </p><p class="text-pretty md:w-1/2 py-4 text-sm leading-relaxed text-start"> Be a part of our next chapter. Seize the next opportunity. For new aspirations. </p><h6 class="font-extrabold text-start"><a href="https://www.piepjack-clothing.de/" target="_blank" rel="noopener noreferrer"> JOIN THE MOVEMENT ON PIECKJACK-CLOTHING.DE</a></h6>', 5)]))
}

const hw=dt(uw, [["render", fw]]), pw= {}

, mw= {
    class:"flex justify-center items-center flex-col w-full h-full"
}

; function gw(e, t) {
    return J(), X("div", mw, t[0]||(t[0]=[qr('<h1 class="text-3xl font-extrabold text-center mb-12"> TERMS OF SERVICE </h1><div class="rte prose container"> Allgemeine Geschäftsbedingungen und Kundeninformationen<br><br>I. Allgemeine Geschäftsbedingungen<br><br>§ 1 Grundlegende Bestimmungen<br><br>(1) Die nachstehenden Geschäftsbedingungen gelten für Verträge, die Sie mit uns als Anbieter (Mert Bulut) über die Internetseite moremoneymorelove.de schließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen.<br><br>(2) Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann. Unternehmer ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen Tätigkeit handelt.<br><br>§ 2 Zustandekommen des Vertrages<br><br>(1) Gegenstand des Vertrages ist der Verkauf von Waren.<br><br>Unsere Angebote im Internet sind unverbindlich und kein verbindliches Angebot zum Abschluss eines Vertrages.<br><br><br>(2) Sie können ein verbindliches Kaufangebot (Bestellung) über das Online-Warenkorbsystem abgeben.<br>Dabei werden die zum Kauf beabsichtigten Waren im &quot;Warenkorb&quot; abgelegt. Über die entsprechende Schaltfläche in der Navigationsleiste können Sie den &quot;Warenkorb&quot; aufrufen und dort jederzeit Änderungen vornehmen. Nach Aufrufen der Seite &quot;Kasse&quot; und der Eingabe der persönlichen Daten sowie der Zahlungs- und Versandbedingungen werden abschließend nochmals alle Bestelldaten auf der Bestellübersichtsseite angezeigt. Vor Absenden der Bestellung haben Sie die Möglichkeit, die Angaben in der Bestellübersicht nochmals zu überprüfen, zu ändern (auch über die Funktion &quot;zurück&quot; des Internetbrowsers) bzw. die Bestellung abzubrechen.<br>Mit dem Absenden der Bestellung über die Schaltfläche &quot;zahlungspflichtig bestellen&quot; geben Sie ein verbindliches Angebot bei uns ab.<br>Sie erhalten zunächst eine automatische E-Mail über den Eingang Ihrer Bestellung, die noch nicht zum Vertragsschluss führt.<br><br>(3) Die Annahme des Angebots (und damit der Vertragsabschluss) erfolgt innerhalb von 2 Tagen durch Bestätigung in Textform (z.B. E-Mail), in welcher Ihnen die Ausführung der Bestellung oder Auslieferung der Ware bestätigt wird (Auftragsbestätigung).<br>Sollten Sie keine entsprechende Nachricht erhalten haben, sind Sie nicht mehr an Ihre Bestellung gebunden. Gegebenenfalls bereits erbrachte Leistungen werden in diesem Fall unverzüglich zurückerstattet.<br><br>(4) Die Abwicklung der Bestellung und Übermittlung aller im Zusammenhang mit dem Vertragsschluss erforderlichen Informationen erfolgt per E-Mail zum Teil automatisiert. Sie haben deshalb sicherzustellen, dass die von Ihnen bei uns hinterlegte E-Mail-Adresse zutreffend ist, der Empfang der E-Mails technisch sichergestellt und insbesondere nicht durch SPAM-Filter verhindert wird.<br><br>§ 3 Zurückbehaltungsrecht, Eigentumsvorbehalt<br><br>(1) Ein Zurückbehaltungsrecht können Sie nur ausüben, soweit es sich um Forderungen aus demselben Vertragsverhältnis handelt.<br><br>(2) Die Ware bleibt bis zur vollständigen Zahlung des Kaufpreises unser Eigentum.<br><br>§ 4 Gewährleistung<br><br>(1) Es bestehen die gesetzlichen Mängelhaftungsrechte.<br><br>(2) Als Verbraucher werden Sie gebeten, die Sache bei Lieferung umgehend auf Vollständigkeit, offensichtliche Mängel und Transportschäden zu überprüfen und uns sowie dem Spediteur Beanstandungen schnellstmöglich mitzuteilen. Kommen Sie dem nicht nach, hat dies keine Auswirkung auf Ihre gesetzlichen Gewährleistungsansprüche.<br><br>§ 5 Rechtswahl<br><br>(1) Es gilt deutsches Recht. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird (Günstigkeitsprinzip).<br><br>(2) Die Bestimmungen des UN-Kaufrechts finden ausdrücklich keine Anwendung.<br><br><br><br><br>II. Kundeninformationen<br><br>1. Identität des Verkäufers<br><br><p>massive group GmbH</p><p>PIEP JACK CLOTHING</p><p>Otto-Hahn-Str. 34</p><p>85521 Hohenbrunn OT Riemerling</p><p> DEUTSCHLAND / DEUTSCHLAND<br><br>Geschäftsführer: Mert Bulut </p><p>Telefonnummer: +49 152 04204839</p><br><br><br>Alternative Streitbeilegung:<br>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter https://ec.europa.eu/odr (<a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>).<br><br>2. Informationen zum Zustandekommen des Vertrages<br><br>Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die Korrekturmöglichkeiten erfolgen nach Maßgabe der Regelungen &quot;Zustandekommen des Vertrages&quot; unserer Allgemeinen Geschäftsbedingungen (Teil I.).<br><br>3. Vertragssprache, Vertragstextspeicherung<br><br>3.1. Die Vertragssprache ist deutsch.<br><br>3.2. Der vollständige Vertragstext wird von uns nicht gespeichert. Vor Absenden der Bestellung über das Online - Warenkorbsystem können die Vertragsdaten über die Druckfunktion des Browsers ausgedruckt oder elektronisch gesichert werden. Nach Zugang der Bestellung bei uns werden die Bestelldaten, die gesetzlich vorgeschriebenen Informationen bei Fernabsatzverträgen und die Allgemeinen Geschäftsbedingungen nochmals per E-Mail an Sie übersandt.<br><br>4. Wesentliche Merkmale der Ware oder Dienstleistung<br><br>Die wesentlichen Merkmale der Ware und/oder Dienstleistung finden sich im jeweiligen Angebot.<br><br>5. Preise und Zahlungsmodalitäten<br><br>5.1. Die in den jeweiligen Angeboten angeführten Preise sowie die Versandkosten stellen Gesamtpreise dar. Sie beinhalten alle Preisbestandteile einschließlich aller anfallenden Steuern.<br><br>5.2. Die anfallenden Versandkosten sind nicht im Kaufpreis enthalten. Sie sind über eine entsprechend bezeichnete Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot aufrufbar, werden im Laufe des Bestellvorganges gesondert ausgewiesen und sind von Ihnen zusätzlich zu tragen, soweit nicht die versandkostenfreie Lieferung zugesagt ist.<br><br>5.3. Die Ihnen zur Verfügung stehenden Zahlungsarten sind unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot ausgewiesen.<br><br>5.4. Soweit bei den einzelnen Zahlungsarten nicht anders angegeben, sind die Zahlungsansprüche aus dem geschlossenen Vertrag sofort zur Zahlung fällig.<br><br>6. Lieferbedingungen<br><br>6.1. Die Lieferbedingungen, der Liefertermin sowie gegebenenfalls bestehende Lieferbeschränkungen finden sich unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot.<br><br>6.2. Soweit Sie Verbraucher sind, ist gesetzlich geregelt, dass die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der verkauften Sache während der Versendung erst mit der Übergabe der Ware an Sie übergeht, unabhängig davon, ob die Versendung versichert oder unversichert erfolgt. Dies gilt nicht, wenn Sie eigenständig ein nicht vom Unternehmer benanntes Transportunternehmen oder eine sonst zur Ausführung der Versendung bestimmte Person beauftragt haben.<br><br>7. Gesetzliches Mängelhaftungsrecht<br><br>Die Mängelhaftung richtet sich nach der Regelung &quot;Gewährleistung&quot; in unseren Allgemeinen Geschäftsbedingungen (Teil I).<br><br>Diese AGB und Kundeninformationen wurden von den auf IT-Recht spezialisierten Juristen des Händlerbundes erstellt und werden permanent auf Rechtskonformität geprüft. Die Händlerbund Management AG garantiert für die Rechtssicherheit der Texte und haftet im Falle von Abmahnungen. Nähere Informationen dazu finden Sie unter: https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service (https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service).<br><br>letzte Aktualisierung: 29.08.2023 <div id="aircall-extension-app"></div></div>', 2)]))
}

const bw=dt(pw, [["render", gw]]), _w= {}

, vw= {
    class:"flex justify-center items-center flex-col w-full h-full"
}

; function yw(e, t) {
    return J(), X("div", vw, t[0]||(t[0]=[qr('<h1 class="text-3xl font-extrabold text-center mb-12">IMPRESSUM</h1><div class="prose"><meta charset="utf-8"><p>massive group GmbH</p><p><strong>PIEP JACK CLOTHING</strong></p><meta charset="utf-8"><p> Otto-Hahn-Str. 34<br>85521 Hohenbrunn OT Riemerling<br>Deutschland </p><p><meta charset="UTF-8"><span>Geschäftsführer: Mert Mehmet Bulut</span></p><p><meta charset="UTF-8"><span data-mce-fragment="1">Amtsgericht München <br><meta charset="UTF-8"><base>Registernummer: HRB 193552</span><br><span data-mce-fragment="1">Umsatzsteueridentifikationsnummer </span>DE 279 196 402 </p><p><em>(DIES IST NICHT DIE RÜCKSENDEADRESSE!)</em><br><br></p><p> E-Mail: <a href="emailto:support@moremoneymorelove.de" target="_blank">support@moremoneymorelove.de</a></p><p><span data-mce-fragment="1">Die Antwort kann 2-4 Werktage dauern.</span><br><br><br>Alternative Streitbeilegung:<br>Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter https://ec.europa.eu/odr<a href="https://ec.europa.eu/consumers/odr">(https://ec.europa.eu/consumers/odr)</a>. </p></div>', 2)]))
}

const ww=dt(_w, [["render", yw]]), Ew= {}

, Sw= {
    class:"flex justify-center items-center flex-col w-full h-full"
}

; function xw(e, t) {
    return J(), X("div", Sw, t[0]||(t[0]=[c("h1", {
                class:"text-sm font-bold text-center mb-3"
            }

            , "BRAUCHST DU HILFE?", -1), c("h1", {
            class:"text-3xl font-extrabold text-center mb-12"
        }

        , " FREQUENTLY ASKED QUESTIONS ", -1), c("div", {
        class:"faq"
    }

    , [c("div", {
        class:"faq__content"
    }

    , [c("p", {
        id:"block-category", class:"faq__category h4"
    }

    , " Bestellvorgang "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false", style: {}
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Wie kann ich eine Bestellung aufgeben?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content", style: {
        opacity:"0", transform:"translateY(0px)"
    }
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Um Ihre Bestellung abzuschließen, folgen Sie bitte den Zahlungsschritten. Nachdem Sie Ihren Warenkorb bestätigt haben, wählen Sie eine Zahlungsmethode und fahren Sie fort. ")])])]), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false", style: {}
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Ist es möglich, eine Bestellung zu ändern oder zu stornieren?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content", style: {
        opacity:"0", transform:"translateY(0px)"
    }
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Sobald die Bestellung bestätigt wurde, können wir keine Änderungen mehr vornehmen. Sie können jedoch eine Bestellung stornieren, wenn sie noch nicht bearbeitet wurde. ")])])]), c("p", {
    id:"block-category_G4RBWX", class:"faq__category h4"
}

, " Zahlungsinformationen "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"true", open:"", style: {}
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Ist Ihre Zahlung sicher?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content", style: {
        opacity:"1", transform:"translateY(0px)"
    }
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Deine Transaktions- und Zahlungsinformationen werden direkt von unseren Zahlungsanbietern mit sicherer Verschlüsselung nach strengen Bankstandards verarbeitet. Deine Kreditkarteninformationen werden direkt an die Bank gesendet und können nur von Ihrer Bank gelesen oder eingesehen werden, nicht einmal von MOREMONEYMORELOVE. ")])])]), c("p", {
    id:"block-category_b4axzg", class:"faq__category h4"
}

, " Versand und Lieferung "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Wann wird die Bestellung versandt?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Deine Bestellung wird innerhalb von 2 Arbeitstagen nach dem Bestätigungsdatum bearbeitet und versandt. "), c("p", null, " Sobald deine Bestellung versandt wurde, erhälst du eine Bestätigungs-E-Mail mit einer Sendungsverfolgungsnummer, mit der du den Status der Sendung online überprüfen kannst. Für Informationen über den Versand und die Lieferung deiner Bestellung wende dich bitte an unseren Kundendienst. ")])])]), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Wie hoch sind die Versandkosten?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, [ue(" Ausführliche Informationen zu Versand und Kosten findest du "), c("a", {
        href:"/pages/versand", title:"Versand"
    }

    , "hier."), c("br")])])])]), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Kann die Lieferadresse nachträglich geändert werden?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, [ue(" Sobald die Bestellung in unserem Lager bearbeitet wurde, kannst du die Lieferadresse nicht mehr ändern. "), c("br")])])])]), c("p", {
    id:"block-category_UGchHp", class:"faq__category h4"
}

, " Rücksendungen und Erstattungen "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Wie kann ich einen Artikel zurückgeben?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, [ue(" Du kannst deine Bestellung innerhalb von 14 Tagen nach Erhalt der Ware über unser "), c("a", {
        href:"https://moremoneymorelove.returnsportal.online", title:"Rücksendung deiner Bestellung "
    }

    , "Retourenportal "), ue(" zurückgeben"), c("a", {
    href:"https://moremoneymorelove.returnsportal.online", title:"Rücksendung deiner Bestellung "
}

, ". ")])])])]), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Welche Rückgabebedingungen gelten?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Die zurückzusendende Ware muss sich in einem neuen, ungetragenen und unbeschädigten Zustand befinden. ")])])]), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Wann erhalte ich meine Rückerstattung?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, " Die Bearbeitung Ihrer Rückerstattung dauert 7-14 Arbeitstage und wird auf Ihre ursprüngliche Zahlungsmethode zurückerstattet. ")])])]), c("p", {
    id:"block-category_UJqx6N", class:"faq__category h4"
}

, " Auftragsverfolgung "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Kann ich den Status meiner Bestellung verfolgen?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, [ue(" Sie können Ihre Bestellung "), c("a", {
        href:"https://moremoneymorelove.de/pages/tracking?search=", title:"https://moremoneymorelove.de/pages/tracking?search="
    }

    , "hier "), ue(" verfolgen "), c("a", {
    href:"https://moremoneymorelove.de/pages/tracking?search=", title:"https://moremoneymorelove.de/pages/tracking?search="
}

, ". ")])])])]), c("p", {
    id:"block-category_CPMLRF", class:"faq__category h4"
}

, " Kontakt und Unterstützung "), c("details", {
    class:"accordion group", is:"accordion-disclosure", "aria-expanded":"false"
}

, [c("summary", null, [c("span", {
        class:"accordion__toggle text-lg"
    }

    , [c("span", {
        class:"text-with-icon gap-4"
    }

    , "Meine Frage wurde nicht beantwortet, wo kann ich Hilfe bekommen?"), c("span", {
    class:"animated-plus group-expanded:rotate", "aria-hidden":"true"

})])]), c("div", {
    class:"accordion__content"
}

, [c("div", {
    class:"prose"
}

, [c("p", null, [ue(" You still have questions? Contact our support-team: "), c("br"), c("br"), c("strong", null, "support@moremoneymorelove.de ")]), c("p", null, " Unser Team wird sich bemühen, Ihnen innerhalb von 2 Arbeitstagen zu antworten. ")])])])])], -1)]))
}

const Cw=dt(Ew, [["render", xw]]), Lw= {}

, Tw= {
    class:"flex flex-col gap-4 justify-center items-center"
}

, Ow= {
    class:"w-full md:w-1/4"
}

, Aw=["placeholder"], Rw= {
    type:"Submit", class:"view-all text-sm font-bold w-full md:w-1/4"
}

; function Iw(e, t) {
    return J(), X(we, null, [t[0]||(t[0]=c("h1", {
                class:"text-4xl font-extrabold text-center border-b border-gray mb-2"
            }

            , " Verfolge deine Bestellung ", -1)), c("div", Tw, [c("form", Ow, [c("input", {
                class:"shadow appearance-none border py-2 px-3 text-main leading-tight w-full focus:outline-none focus:shadow-outline", id:"orderNr", type:"text", placeholder:e.$t("input.orderTracking")
            }

            , null, 8, Aw)]), c("button", Rw, F(e.$t("buttons.search")), 1)]), t[1]||(t[1]=c("div", null, null, -1))], 64)
}

const kw=dt(Lw, [["render", Iw]]), Mw= {}

, Pw= {
    class:"flex justify-center items-center flex-col w-full h-full"
}

; function Nw(e, t) {
    return J(), X("div", Pw, t[0]||(t[0]=[c("h1", {
                class:"text-3xl font-extrabold text-center mb-12"
            }

            , "SHIPPING", -1), c("p", {
            class:"text-pretty md:w-1/2 py-4 text-sm leading-relaxed text-start"
        }

        , " Nachdem du deine Bestellung aufgegeben hast, erhälsts du eine Bestätigungs-E-Mail mit allen Einzelheiten zu deinem Kauf, einschließlich einer Tracking-Nummer. Mit dieser Nummer kannst du den Verlauf deiner Bestellung in Echtzeit verfolgen und weißt so immer, wo sich dein Paket befindet. ", -1), c("div", {
        class:"table-scroller mb-5"
    }

    , [c("table", {
        style: {
            width:"561px"
        }
    }

    , [c("tbody", null, [c("tr", {
            style: {
                height:"20px"
            }
        }

        , [c("td", {
            style: {
                height:"20px", width:"197.688px", "text-align":"center"
            }
        }

        , [c("strong", null, "Land")]), c("td", {
        style: {
            height:"20px", width:"195.312px", "text-align":"center"
        }
    }

    , [c("strong", null, "Lieferung")]), c("td", {
    style: {
        height:"20px", width:"141px", "text-align":"center"
    }
}

, [c("strong", null, "Kosten")]), c("td", {
    style: {
        height:"20px", width:"318px", "text-align":"center"
    }
}

, [c("strong", null, "Kostenlose Lieferung")])]), c("tr", {
    style: {
        height:"19px"
    }
}

, [c("td", {
    style: {
        height:"19px", width:"197.688px", "text-align":"center"
    }
}

, " Deutschland  "), c("td", {
    style: {
        height:"19px", width:"195.312px", "text-align":"center"
    }
}

, " 2-4 "), c("td", {
    style: {
        height:"19px", width:"141px", "text-align":"center"
    }
}

, [c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "€"), ue("3,95 ")]), c("td", {
    style: {
        height:"19px", width:"318px", "text-align":"center"
    }
}

, [c("meta", {
    charset:"UTF-8"

}), c("span", null, "bei Bestellungen über 100 €")])]), c("tr", {
    style: {
        height:"20px"
    }
}

, [c("td", {
    style: {
        height:"20px", width:"197.688px", "text-align":"center"
    }
}

, " Österreich "), c("td", {
    style: {
        height:"20px", width:"195.312px", "text-align":"center"
    }
}

, [c("span", {
    "mce-data-marked":"1"
}

, "2-4")]), c("td", {
    style: {
        height:"20px", width:"141px", "text-align":"center"
    }
}

, [c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "€"), ue("4,95 ")]), c("td", {
    style: {
        height:"20px", width:"318px", "text-align":"center"
    }
}

, [c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "bei Bestellungen über"), c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "€"), ue("100 ")])]), c("tr", {
    style: {
        height:"11px"
    }
}

, [c("td", {
    style: {
        height:"11px", width:"197.688px", "text-align":"center"
    }
}

, [c("span", null, [ue("Schweiz & andere "), c("meta", {
        charset:"utf-8"

    }), ue("Europäisch"), c("br", {
    "data-mce-fragment":"1"

}), ue("Länder")])]), c("td", {
    style: {
        height:"11px", width:"195.312px", "text-align":"center"
    }
}

, [c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", null, "3-5")]), c("td", {
    style: {
        height:"11px", width:"141px", "text-align":"center"
    }
}

, [c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "€"), ue("9,99 ")]), c("td", {
    style: {
        height:"11px", width:"318px", "text-align":"center"
    }
}

, [c("span", null, "-")])]), c("tr", {
    style: {
        height:"24px"
    }
}

, [c("td", {
    style: {
        height:"24px", width:"197.688px", "text-align":"center"
    }
}

, [c("span", null, "USA")]), c("td", {
    style: {
        height:"24px", width:"195.312px", "text-align":"center"
    }
}

, [c("span", null, "8-10")]), c("td", {
    style: {
        height:"24px", width:"141px", "text-align":"center"
    }
}

, [c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), c("span", {
    "data-mce-fragment":"1"
}

, "€2"), c("span", null, "9"), c("span", null, ",99")]), c("td", {
    style: {
        height:"24px", width:"318px", "text-align":"center"
    }
}

, [c("span", null, "-")])]), c("tr", {
    style: {
        height:"24px"
    }
}

, [c("td", {
    style: {
        height:"24px", width:"197.688px", "text-align":"center"
    }
}

, " Rest der Welt "), c("td", {
    style: {
        height:"24px", width:"195.312px", "text-align":"center"
    }
}

, [c("span", null, "8-10")]), c("td", {
    style: {
        height:"24px", width:"141px", "text-align":"center"
    }
}

, [c("span", {
    "data-mce-fragment":"1"
}

, [c("meta", {
    charset:"UTF-8"

}), c("base", {
    href:"https://nomoneynolove66.myshopify.com/"

}), ue("€19,99")])]), c("td", {
    style: {
        height:"24px", width:"318px", "text-align":"center"
    }
}

, [c("span", null, "-")])])])])], -1), c("h6", {
    class:"font-bold text-start"
}

, " Nach einzelnen Drops kann sich die Lieferzeit auf 10-16 Tage verlängern. ", -1)]))
}

const Fw=dt(Mw, [["render", Nw]]), Dw= {
    class:"p-4 w-1/4"
}

, $w= {
    class:"flex items-center justify-between border-b border-gray px-4 sm:px-0"
}

, jw= {
    class:"-mt-px flex w-0 flex-1 items-center mb-3 opacity-55"
}

, Hw= {
    class:"hidden md:-mt-px md:flex"
}

, Uw= {
    class:"-mt-px flex w-0 flex-1 justify-end mb-3 opacity-55"
}

, Bw= {
    class:"inline-flex items-center border-b-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
}

, Vw= {
    __name:"Pagination", setup(e) {
        return(t, n)=> {
            const r=Kt("router-link"); return J(), X("div", Dw, [c("nav", $w, [c("div", jw, [B(r, {
                            to:"/collections/shop-all", class:"inline-flex items-center border-b-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-300"
                        }

                        , {
                        default:ae(()=>[B(me(Di), {
                                StrokeWidth:"1", size:"18"
                            })]), _:1

                })]), c("div", Hw, [B(r, {
                to:"/collections/shop-all", class:"inline-flex items-center border-b-2 p-4 text-sm font-medium border-main text-main"
            }

            , {
            default:ae(()=>n[0]||(n[0]=[ue("1")])), _:1

        }), B(r, {
        to:"/collections/shop-all", class:"inline-flex items-center border-b-2 border-transparent p-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300", href:"/blog?page=2"
    }

    , {
    default:ae(()=>n[1]||(n[1]=[ue("2")])), _:1

}), B(r, {
    to:"/collections/shop-all", class:"inline-flex items-center border-b-2 border-transparent p-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
}

, {
default:ae(()=>n[2]||(n[2]=[ue("3")])), _:1

})]), c("div", Uw, [c("a", Bw, [B(me($i), {
            StrokeWidth:"1", size:"18"
        })])])])])
}
}
}

, zw= {
    class:"grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-accent grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5"
}

, Ww= {
    class:"flex justify-center w-full"
}

, Gw= {
    __name:"Collections", setup(e) {
        return(t, n)=>(J(), X(we, null, [c("div", zw, [(J(), X(we, null, yn(24, r=>c("div", null, [B(mn)])), 64))]), c("div", Ww, [B(Vw)])], 64))
    }
}

, Kw= {
    class:"flex flex-wrap justify-start items-center overflow-hidden bg-transparent border-t border-b border-gray"
}

, qw= {
    class:"grow px-4 py-3 text-xs uppercase cursor-pointer", for:"collapse"
}

, Qw= {
    class:"-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100 text-xs"
}

, Jw= {
    class:"list-disc"
}

, Yw= {
    class:"flex flex-wrap justify-start overflow-hidden items-center text-xs border-t border-b border-gray relative"
}

, Zw= {
    class:"grow px-4 py-3 text-xs uppercase cursor-pointer text-wrap break-words", for:"collapse2"
}

, Xw= {
    class:"-transparent absolute -translate-y-full scale-75 scale-y-0 opacity-0 transition-all overflow-auto duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100"
}

, e4= {
    class:"py-3"
}

, t4= {
    class:"table-scroller overflow-auto"
}

, n4= {
    class:"underline", href:""
}

, r4= {
    __name:"Accordion", setup(e) {
        return(t, n)=>(J(), X(we, null, [c("div", Kw, [B(me(ff), {
                        strokeWidth:"1px", size:"18", class:"opacity-55"

                    }), c("label", qw, F(t.$t("product.desc")), 1), n[0]||(n[0]=c("input", {
                        class:"peer mx-4 my-3 h-0 appearance-none rounded border opacity-0 absolute w-full", type:"checkbox", name:"collapse", id:"collapse"
                    }

                    , null, -1)), n[1]||(n[1]=c("svg", {
                    xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", "stroke-width":"1", stroke:"currentColor", class:"mx-1 my-3 h-4 w-4 transition-all duration-200 peer-checked:rotate-45"
                }

                , [c("path", {
                    "stroke-linecap":"round", "stroke-linejoin":"round", d:"M12 6v12m6-6H6"

                })], -1)), c("div", Qw, [c("ul", Jw, [c("li", null, F(t.$t("product.polyester")), 1), c("li", null, F(t.$t("product.embroideredPatch")), 1), c("li", null, F(t.$t("product.wovenPatch")), 1)]), ue(" " +F(t.$t("product.femaleModel", {
                    height:171, weight:52, size:"S"

                })), 1)])]), c("div", Yw, [B(me(xg), {
        strokeWidth:"1px", size:"18", class:"opacity-55"

    }), c("label", Zw, F(t.$t("product.shipping")), 1), n[12]||(n[12]=c("svg", {
        xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", "stroke-width":"1", stroke:"currentColor", class:"mx-1 my-3 h-4 w-4 transition-all duration-200 peer-checked:rotate-45"
    }

    , [c("path", {
        "stroke-linecap":"round", "stroke-linejoin":"round", d:"M12 6v12m6-6H6"

    })], -1)), n[13]||(n[13]=c("input", {
        class:"peer mx-4 my-3 h-0 appearance-none rounded border opacity-0 absolute w-full", type:"checkbox", name:"collapse2", id:"collapse2"
    }

    , null, -1)), c("div", Xw, [c("div", e4, [c("div", t4, [c("table", null, [c("thead", null, [c("tr", null, [c("th", null, F(t.$t("product.shippingInfo.country")), 1), c("th", null, F(t.$t("product.shippingInfo.deliveryTime")), 1), c("th", null, F(t.$t("product.shippingInfo.shippingCost")), 1), c("th", null, F(t.$t("product.shippingInfo.freeShipping")), 1)])]), c("tbody", null, [c("tr", null, [c("td", null, F(t.$t("product.shippingInfo.germany")), 1), c("td", null, F(t.$t("product.shippingInfo.germanyDelivery")), 1), n[2]||(n[2]=c("td", null, "€3.95", -1)), c("td", null, F(t.$t("product.shippingInfo.freeShipping"))+" on orders over €100 ", 1)]), c("tr", null, [c("td", null, F(t.$t("product.shippingInfo.austria")), 1), c("td", null, F(t.$t("product.shippingInfo.austriaDelivery")), 1), n[3]||(n[3]=c("td", null, "€4.95", -1)), c("td", null, F(t.$t("product.shippingInfo.freeShipping"))+" on orders over €100 ", 1)]), c("tr", null, [c("td", null, F(t.$t("product.shippingInfo.switzerland")), 1), c("td", null, F(t.$t("product.shippingInfo.switzerlandDelivery")), 1), n[4]||(n[4]=c("td", null, "€9.95", -1)), n[5]||(n[5]=c("td", null, "-", -1))]), c("tr", null, [c("td", null, F(t.$t("product.shippingInfo.usa")), 1), c("td", null, F(t.$t("product.shippingInfo.usaDelivery")), 1), n[6]||(n[6]=c("td", null, "€29.99", -1)), n[7]||(n[7]=c("td", null, "-", -1))]), c("tr", null, [c("td", null, F(t.$t("product.shippingInfo.restOfWorld")), 1), c("td", null, F(t.$t("product.shippingInfo.restWorldDelivery")), 1), n[8]||(n[8]=c("td", null, "€19.99", -1)), n[9]||(n[9]=c("td", null, "-", -1))])])])]), n[11]||(n[11]=c("div", {
                class:"py-3"
            }

            , null, -1)), c("title", null, F(t.$t("product.shippingInfo.returnsInfo")), 1), c("p", null, [ue(F(t.$t("product.shippingInfo.returnsInfo"))+" ", 1), c("a", n4, F(t.$t("product.shippingInfo.returnsPortal")), 1), n[10]||(n[10]=ue(". "))])])])])], 64))
}
}

, s4= {
    class:"w-full flex flex-col gap-12 md:flex-row"
}

, o4= {
    class:"w-full md:w-1/3 lg:w-1/4"
}

, i4= {
    class:"sticky top-12 flex flex-col gap-6"
}

, l4= {
    class:"text-base font-extrabold"
}

, a4= {
    class:"text-gray-300 text-xs"
}

, c4= {
    class:"text-xs"
}

, u4= {
    class:"view-all text-xs text-center"
}

, d4= {
    class:"flex justify-between gap-4"
}

, f4= {
    class:"rounded-full items-center flex w-1/2 h-8 place-content-center gap-4 justify-center bg-[#cbeaf8] text-[#253b80]", style: {
        "font-size":"0.6rem"
    }
}

, h4= {
    class:"rounded-full items-center flex w-1/2 h-8 place-content-center gap-4 justify-center bg-[#cdd5ff] text-[#142688]", style: {
        "font-size":"0.4rem"
    }
}

, p4= {
    class:"uppercase text-sm mt-3"
}

, m4= {
    class:"flex items-center gap-4"
}

, g4= {
    class:"flex flex-col items-start gap-2 text-xs"
}

, b4= {
    class:"opacity-55"
}

, _4= {
    class:"underline"
}

, v4= {
    class:"text-xl font-extrabold text-center mb-12"
}

, y4= {
    __name:"Product", setup(e) {
        return(t, n)=>(J(), X(we, null, [c("div", s4, [n[5]||(n[5]=c("main", {
                            class:"md:w-2/3 lg:w-3/4 w-full min-h-screen grid grid-cols-2 gap-4"
                        }

                        , [c("img", {
                            src:"//moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=1667", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=200   200w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=300   300w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=400   400w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=500   500w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=600   600w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=700   700w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=800   800w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=1000 1000w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=1200 1200w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=1400 1400w,
                            //moremoneymorelove.de/cdn/shop/files/SHORTS1_FINAL.png?v=1721387745&width=1600 1600w
                            `, width:"1667", height:"2500", loading:"eager", fetchpriority:"high", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

                        }), c("img", {
                        src:"//moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=1734", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=200   200w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=300   300w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=400   400w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=500   500w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=600   600w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=700   700w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=800   800w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=1000 1000w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=1200 1200w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=1400 1400w,
                        //moremoneymorelove.de/cdn/shop/files/Foto_224451.jpg?v=1721387754&width=1600 1600w
                        `, width:"1734", height:"2600", loading:"eager", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

                    }), c("img", {
                    src:"//moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=1667", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=200   200w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=300   300w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=400   400w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=500   500w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=600   600w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=700   700w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=800   800w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=1000 1000w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=1200 1200w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=1400 1400w,
                    //moremoneymorelove.de/cdn/shop/files/ECOM_CASHLANE_Shorts1_back.png?v=1721391464&width=1600 1600w
                    `, width:"1667", height:"2500", loading:"lazy", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

                }), c("img", {
                src:"//moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=1734", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=200   200w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=300   300w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=400   400w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=500   500w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=600   600w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=700   700w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=800   800w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=1000 1000w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=1200 1200w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=1400 1400w,
                //moremoneymorelove.de/cdn/shop/files/Foto_224161_589353fc-b906-48bd-bddb-8def04c604aa.jpg?v=1721391471&width=1600 1600w
                `, width:"1734", height:"2600", loading:"lazy", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

            }), c("img", {
            src:"//moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=1734", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=200   200w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=300   300w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=400   400w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=500   500w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=600   600w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=700   700w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=800   800w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=1000 1000w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=1200 1200w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=1400 1400w,
            //moremoneymorelove.de/cdn/shop/files/Foto_224194_e4b9a185-06f7-4f56-b593-ae2a697539d8.jpg?v=1721391471&width=1600 1600w
            `, width:"1734", height:"2600", loading:"lazy", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

        }), c("img", {
        src:"//moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=1734", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=200   200w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=300   300w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=400   400w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=500   500w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=600   600w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=700   700w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=800   800w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=1000 1000w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=1200 1200w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=1400 1400w,
        //moremoneymorelove.de/cdn/shop/files/Foto_224211_ecc2bf91-6a12-414b-bcb6-aef98d1cea58.jpg?v=1721391471&width=1600 1600w
        `, width:"1734", height:"2600", loading:"lazy", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

    }), c("img", {
    src:"//moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=1734", alt:"MORE LOVE MESH SHORTS GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=200   200w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=300   300w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=400   400w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=500   500w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=600   600w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=700   700w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=800   800w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=1000 1000w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=1200 1200w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=1400 1400w,
    //moremoneymorelove.de/cdn/shop/files/Foto_224265_ae8853a5-0c08-4608-9756-70ae79bd3fa9.jpg?v=1721391471&width=1600 1600w
    `, width:"1734", height:"2600", loading:"lazy", fetchpriority:"auto", sizes:"(max-width: 699px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), min(560px, 441px - 96px)"

})], -1)), c("aside", o4, [c("div", i4, [c("h6", l4, F(t.$t("product.title")), 1), c("p", a4, F(t.$t("product.price")), 1), n[3]||(n[3]=qr('<div class="flex flex-row gap-4"><div class="border border-main"><img src="//moremoneymorelove.de/cdn/shop/files/SHORTS2_FINAL.png?v=1721387802" title="" alt="MORE MONEY MESH SHORTS BLACK" height="86" width="86"></div><div class="border border-accent hover:border-main"><img src="//moremoneymorelove.de/cdn/shop/files/SHORTS2_FINAL.png?v=1721387802" title="" alt="MORE MONEY MESH SHORTS BLACK" height="86" width="86"></div><div class="border border-accent hover:border-main"><img src="//moremoneymorelove.de/cdn/shop/files/SHORTS2_FINAL.png?v=1721387802" title="" alt="MORE MONEY MESH SHORTS BLACK" height="86" width="86"></div></div>', 1)), c("p", c4, F(t.$t("product.modelDescription", {
                    height:185, weight:77, size:"L"

                })), 1), n[4]||(n[4]=qr('<div class="flex flex-wrap gap-3"><div class="border w-8 h-8 grid place-content-center p-5 relative"> S </div><div class="border border-gray text-gray w-8 h-8 grid place-content-center p-5"> M </div><div class="border border-gray text-gray w-8 h-8 grid place-content-center p-5"> L </div><div class="meh-diagonal border border-gray text-gray w-8 h-8 relative grid place-content-center p-5"> XL </div></div>', 1)), c("div", u4, F(t.$t("product.addToCart")), 1), c("div", d4, [c("div", f4, [n[0]||(n[0]=c("img", {
                    src:"//moremoneymorelove.de/cdn/shop/files/paypal_icon_65b1e7e0-16be-46f6-9975-522e6b7b064b_medium.png?v=1722667640", title:"", alt:"", height:"", width:"", class:"object-contain w-8"
                }

                , null, -1)), c("span", null, F(t.$t("product.secureAndFast")), 1)]), c("div", h4, [n[1]||(n[1]=c("img", {
                src:"//moremoneymorelove.de/cdn/shop/files/visa_icon_d7450944-e663-4075-b69e-f97704344c33_medium.png?v=1722668083", title:"", alt:"", height:"", width:"", class:"object-contain w-8"
            }

            , null, -1)), c("span", null, F(t.$t("product.creditAndMobile")), 1)])]), c("p", p4, F(t.$t("product.PairsWellWith")), 1), c("div", m4, [n[2]||(n[2]=c("img", {
            src:"//moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=1667", alt:"MORE LOVE MESH JERSEY GREEN", srcset:` //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=100 100w,
            //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=150 150w,
            //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=200 200w,
            //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=250 250w,
            //moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=300 300w
            `, width:"1667", height:"2500", loading:"eager", sizes:"100px", class:"w-24"
        }

        , null, -1)), c("div", g4, [c("h6", null, [c("strong", null, F(t.$t("product.otherProductTitle")), 1)]), c("p", b4, F(t.$t("product.otherProductPrice")), 1), c("p", _4, F(t.$t("product.addToCart")), 1)])]), B(r4)])])]), n[6]||(n[6]=c("hr", {
        class:"text-gray my-6 -mx-4 md:-mx-8 2xl:-mx-16"
    }

    , null, -1)), c("h6", v4, F(t.$t("titles.peopleAlsoLiked")), 1), B(yl)], 64))
}
}

, w4= {}

, E4= {
    class:"container grid gap-6 px-44 tracking-normal leading-relaxed"
}

; function S4(e, t) {
    return J(), X("div", E4, t[0]||(t[0]=[qr('<h1 class="text-3xl font-extrabold text-center mb-12" data-v-c0a755c2> Datenschutzerklärung </h1><p data-v-c0a755c2>Datenschutzerklärung</p><p data-v-c0a755c2> Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird. &quot;Personenbezogene Daten&quot; sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. </p><p data-v-c0a755c2> Server-Logfiles Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet Browser übermittelt und in Protokolldaten (sog. Server-Logfiles) gespeichert. Zu diesen gespeicherten Daten gehören z.B. der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge und der anfragende Provider. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Gewährleistung eines störungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes. Ihre Daten werden dabei u.a. nach Kanada übermittelt. Für Datenübermittlungen nach Kanada liegt ein Angemessenheitsbeschluss der EU-Kommission vor. </p> Kontakt <p data-v-c0a755c2> Verantwortlicher Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten des für die Datenverarbeitung Verantwortlichen finden Sie in unserem Impressum. </p><p data-v-c0a755c2> Initiativ-Kontaktaufnahme des Kunden per E-Mail Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt treten, erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage. Wenn die Kontaktaufnahme der Durchführung vorvertraglichen Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Kontaktaufnahme aus anderen Gründen erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen. Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben. </p><p data-v-c0a755c2>Bestellungen</p><p data-v-c0a755c2> Erhebung, Verarbeitung und Weitergabe personenbezogener Daten bei Bestellungen Bei der Bestellung erheben und verarbeiten wir Ihre personenbezogenen Daten nur, soweit dies zur Erfüllung und Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen erforderlich ist. Die Bereitstellung der Daten ist für den Vertragsschluss erforderlich. Eine Nichtbereitstellung hat zur Folge, dass kein Vertrag geschlossen werden kann. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Erfüllung eines Vertrags mit Ihnen erforderlich. Eine Weitergabe Ihrer Daten erfolgt dabei beispielsweise an die von Ihnen gewählten Versandunternehmen und Dropshipping Anbieter, Zahlungsdienstleister, Diensteanbieter für die Bestellabwicklung und IT-Dienstleister. In allen Fällen beachten wir strikt die gesetzlichen Vorgaben. Der Umfang der Datenübermittlung beschränkt sich auf ein Mindestmaß. Ihre Daten werden dabei u.a. nach Kanada übermittelt. Für Datenübermittlungen nach Kanada liegt ein Angemessenheitsbeschluss der EU-Kommission vor. </p><p data-v-c0a755c2>Betroffenenrechte und Speicherdauer</p><p data-v-c0a755c2> Dauer der Speicherung Nach vollständiger Vertragsabwicklung werden die Daten zunächst für die Dauer der Gewährleistungsfrist, danach unter Berücksichtigung gesetzlicher, insbesondere steuer- und handelsrechtlicher Aufbewahrungsfristen gespeichert und dann nach Fristablauf gelöscht, sofern Sie der wei tergehenden Verarbeitung und Nutzung nicht zugestimmt haben. </p><p data-v-c0a755c2> Rechte der betroffenen Person Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15 bis 20 DSGVO zu: Recht auf Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit. Außerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6 Abs. 1 f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke von Direktwerbung. </p><p data-v-c0a755c2>Beschwerderecht bei der Aufsichtsbehörde</p><p data-v-c0a755c2> Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt. </p><p data-v-c0a755c2>Widerspruchsrecht</p><p data-v-c0a755c2> Beruhen die hier aufgeführten personenbezogenen Datenverarbeitungen auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit diesen Verarbeitungen mit Wirkung für die Zukunft zu widersprechen. Nach erfolgtem Widerspruch wird die Verarbeitung der betroffenen Daten beendet, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihren Interessen, Rechten und Freiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient. </p><p data-v-c0a755c2>letzte Aktualisierung: 27.10.2020</p>', 17)]))
}

const x4=dt(w4, [["render", S4], ["__scopeId", "data-v-c0a755c2"]]), C4= {
    class:"text-center tracking-normal"
}

, L4= {
    class:"text-2xl font-extrabold text-center mb-6"
}

, T4= {
    class:"text-center"
}

, O4= {
    class:"text-center text-sm opacity-55 tracking-normal"
}

, A4=["innerHTML"], R4= {
    class:"container"
}

, I4= {
    class:"w-full mt-5"
}

, k4= {
    class:"text-main opacity-55 hidden sm:table-header-group"
}

, M4= {
    class:"bg-accent border-b border-gray"
}

, P4= {
    class:"p-3 text-left"
}

, N4= {
    class:"uppercase tracking-normal"
}

, F4= {
    class:"p-3 text-left"
}

, D4= {
    class:"uppercase tracking-normal"
}

, $4= {
    class:"p-3 text-left", width:"110px"
}

, j4= {
    class:"uppercase tracking-normal"
}

, H4= {
    class:"border-b border-gray flex flex-col sm:table-row"
}

, U4= {
    class:"p-3"
}

, B4= {
    class:"flex items-center gap-4"
}

, V4= {
    class:"flex flex-col items-start gap-2 text-xs"
}

, z4= {
    class:"custom-number-input w-28 block sm:hidden"
}

, W4= {
    class:"flex flex-row w-full relative bg-transparent mt-1"
}

, G4= {
    class:"text-xs underline text-center py-1"
}

, K4= {
    class:"p-3 hidden h-full sm:table-cell"
}

, q4= {
    class:"custom-number-input w-28 h-full"
}

, Q4= {
    class:"flex flex-row w-full relative bg-transparent mt-1"
}

, J4= {
    class:"text-xs underline text-center py-1"
}

, Y4= {
    class:"flex justify-end border-t border-gray p-4"
}

, Z4= {
    class:"grid justify-items-end gap-3"
}

, X4=["innerHTML"], e3= {
    __name:"CartPage", setup(e) {
        const {
            t
        }

        =Cn(), n=xe(()=>`$ {
                t("cart.taxIncluded")
            }

            $ {
                t("cart.shippingCalc")
            }

            `), r=ne(0), s=()=> {
            r.value++
        }

        , o=()=> {
            r.value>0&&r.value--
        }

        ; return(i, l)=> {
            const a=Kt("Button"); return J(), X("div", C4, [c("h1", L4, F(i.$t("cart.title")), 1), c("div", T4, [c("span", O4, [c("strong", {
                            innerHTML:i.$t("cart.shippingFree")
                        }

                        , null, 8, A4)])]), c("div", R4, [c("table", I4, [c("thead", k4, [c("tr", M4, [c("th", P4, [c("p", N4, F(i.$t("cart.products")), 1)]), c("th", F4, [c("p", D4, F(i.$t("cart.quantity")), 1)]), c("th", $4, [c("p", j4, F(i.$t("cart.total")), 1)])])]), c("tbody", null, [c("tr", H4, [c("td", U4, [c("div", B4, [l[7]||(l[7]=c("img", {
                                            src:"//moremoneymorelove.de/cdn/shop/files/DSC_15650.png?v=1720541466&width=1667", alt:"MORE LOVE MESH JERSEY GREEN", class:"w-24"
                                        }

                                        , null, -1)), c("div", V4, [l[4]||(l[4]=c("h6", null, [c("strong", null, "MORE LOVE MESH JERSEY GREEN")], -1)), l[5]||(l[5]=c("div", {
                                            class:"flex items-center gap-2"
                                        }

                                        , [c("p", {
                                            class:"line-through"
                                        }

                                        , "69,99€"), c("p", null, "49,99€")], -1)), l[6]||(l[6]=c("p", {
                                    class:"uppercase opacity-55"
                                }

                                , "XS", -1)), c("div", z4, [c("div", W4, [c("button", {
                                    onClick:o, class:"border border-gray border-r-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer outline-none"
                                }

                                , l[2]||(l[2]=[c("span", {
                                        class:"m-auto text-2xl font-thin"
                                    }

                                    , "−", -1)])), $t(c("input", {
                                type:"number", "onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u), class:"border-l-0 border-r-0 border-gray outline-none focus:outline-none text-center w-full text-xs hover:text-main focus:text-main cursor-default flex items-center", name:"custom-input-number"
                            }

                            , null, 512), [[Mi, r.value]]), c("button", {
                        onClick:s, class:"border border-gray border-l-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer"
                    }

                    , l[3]||(l[3]=[c("span", {
                            class:"m-auto text-2xl font-thin"
                        }

                        , "+", -1)]))]), c("p", G4, F(i.$t("cart.remove")), 1)])])])]), c("td", K4, [c("div", q4, [c("div", Q4, [c("button", {
                onClick:o, class:"border border-gray border-r-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer outline-none"
            }

            , l[8]||(l[8]=[c("span", {
                    class:"m-auto text-2xl font-thin"
                }

                , "−", -1)])), $t(c("input", {
            type:"number", "onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u), class:"border-l-0 border-r-0 border-gray outline-none focus:outline-none text-center w-full text-xs hover:text-main focus:text-main cursor-default flex items-center", name:"custom-input-number"
        }

        , null, 512), [[Mi, r.value]]), c("button", {
    onClick:s, class:"border border-gray border-l-0 text-main opacity-55 hover:text-gray-700 hover:bg-gray h-full w-20 cursor-pointer"
}

, l[9]||(l[9]=[c("span", {
        class:"m-auto text-2xl font-thin"
    }

    , "+", -1)]))]), c("p", J4, F(i.$t("cart.remove")), 1)])]), l[10]||(l[10]=c("td", {
        class:"p-3 text-main hidden sm:table-cell"
    }

    , " 129.99$ ", -1))])])]), c("div", Y4, [c("div", Z4, [c("p", null, F(i.$t("cart.totalAmount", {
                    total:"129.99$"

                })), 1), c("p", {
        innerHTML:n.value, class:"text-xs opacity-55"
    }

    , null, 8, X4), B(a, {
    class:"view-all text-xs w-1/2"
}

, {
default:ae(()=>[ue(F(i.$t("cart.checkout")), 1)]), _:1
})])])])])
}
}
}

, t3=dt(e3, [["__scopeId", "data-v-a9e2b787"]]), n3= {
    class:"relative -m-4 md:-m-8 2xl:-m-16 pb-4 md:pb-8 2xl:pb-16 h-[88vh]"
}

, r3= {
    class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-accent font-bold text-center grid gap-8"
}

, s3= {
    class:"flex items-start justify-center w-full gap-4 count-down-main text-sm"
}

, o3= {
    class:"timer w-16"
}

, i3= {
    class:"countdown-element days font-manrope font-semibold text-2xl text-accent text-center"
}

, l3= {
    class:"text-sm font-normal text-gray-900 mt-1 text-center w-full"
}

, a3= {
    class:"timer w-16"
}

, c3= {
    class:"countdown-element hours font-manrope font-semibold text-2xl text-accent text-center"
}

, u3= {
    class:"text-sm font-normal text-gray-900 mt-1 text-center w-full"
}

, d3= {
    class:"timer w-16"
}

, f3= {
    class:"countdown-element minutes font-manrope font-semibold text-2xl text-accent text-center"
}

, h3= {
    class:"text-sm font-normal text-gray-900 mt-1 text-center w-full"
}

, p3= {
    class:"timer w-16"
}

, m3= {
    class:"countdown-element seconds font-manrope font-semibold text-2xl text-accent text-center"
}

, g3= {
    class:"text-sm font-normal text-gray-900 mt-1 text-center w-full"
}

, b3= {
    class:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7"
}

, _3= {
    __name:"OffTheRadar", setup(e) {
        Cn(); const t=ne(0), n=ne(0), r=ne(0), s=ne(0), o=new Date("2024-12-31T23:59:59").getTime(), i=()=> {
            const l=new Date().getTime(), a=o-l; t.value=Math.floor(a/(1e3*60*60*24)), n.value=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)), r.value=Math.floor(a%(1e3*60*60)/(1e3*60)), s.value=Math.floor(a%(1e3*60)/1e3)
        }

        ; return Yn(()=> {
                i(), setInterval(i, 1e3)

            }), (l, a)=>(J(), X(we, null, [c("div", n3, [a[3]||(a[3]=c("img", {
                            src:"//moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=4480", alt:"", srcset:` //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=200   200w,

                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=300   300w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=400   400w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=500   500w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=600   600w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=700   700w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=800   800w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=900   900w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=1000 1000w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=1200 1200w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=1400 1400w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=1600 1600w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=1800 1800w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=2000 2000w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=2200 2200w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=2400 2400w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=2600 2600w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=2800 2800w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=3000 3000w,
                            //moremoneymorelove.de/cdn/shop/files/240926_MMML_PJ_FINAL_FULL_FISCH_LETSGETIT-9_2.jpg?v=1727869918&width=3200 3200w
                            `, width:"4480", height:"1613", sizes:"100vw", class:"filter brightness-75 h-full w-full object-cover", style: {
                                "z-index":"-1", transform:"scale(var(--motion-scale))", opacity:"1", "--motion-scale":"1"
                            }
                        }

                        , null, -1)), c("div", r3, [ue(F(l.$t("buttons.offTheRadar"))+" ", 1), c("div", s3, [c("div", o3, [c("div", null, [c("h3", i3, F(t.value), 1)]), c("p", l3, F(l.$t("header.days")), 1)]), a[0]||(a[0]=c("h3", {
                                class:"font-manrope font-semibold text-2xl text-gray-900"
                            }

                            , " : ", -1)), c("div", a3, [c("div", null, [c("h3", c3, F(n.value), 1)]), c("p", u3, F(l.$t("header.hours")), 1)]), a[1]||(a[1]=c("h3", {
                            class:"font-manrope font-semibold text-2xl text-gray-900"
                        }

                        , " : ", -1)), c("div", d3, [c("div", null, [c("h3", f3, F(r.value), 1)]), c("p", h3, F(l.$t("header.minutes")), 1)]), a[2]||(a[2]=c("h3", {
                        class:"font-manrope font-semibold text-2xl text-gray-900"
                    }

                    , " : ", -1)), c("div", p3, [c("div", null, [c("h3", m3, F(s.value), 1)]), c("p", g3, F(l.$t("header.seconds")), 1)])])])]), c("div", b3, [B(mn), B(mn), B(mn), B(mn), B(mn), B(mn)])], 64))
}
}

, v3=dt(_3, [["__scopeId", "data-v-a3af75b1"]]), y3= {}

, w3= {
    class:"grid grid-cols-2"
}

; function E3(e, t) {
    return J(), X("div", w3, "3123")
}

const S3=dt(y3, [["render", E3]]), x3=[ {
    path:"/", name:"piepjack-clothing", component:cw, children:[ {
        path:"", name:"Home", component:rw
    }

    , {
    path:"terms-of-service", name:"terms-of-service", component:bw, meta: {
        title:"Terms of Service"
    }
}

, {
path:"impressum", name:"Impressum", component:ww, meta: {
    title:"Impressum"
}
}

, {
path:"shipping", name:"Shipping", component:Fw, meta: {
    title:"Shipping"
}
}

, {
path:"faq", name:"faq", component:Cw, meta: {
    title:"FAQ"
}
}

, {
path:"track-your-order", name:"Track your Order", component:kw, meta: {
    title:"Track your Order"
}
}

, {
path:"about", name:"AboutUs", component:hw, meta: {
    title:"ABOUT PAGE"
}
}

, {
path:"collections/shop-all", name:"collections", component:Gw, meta: {
    title:"COLLECTIONS"
}
}

, {
path:"product", name:"Product", component:y4
}

, {
path:"datenschutzerklarung", name:"Datenschutzerklärung", component:x4, meta: {
    title:"DATENSCHUTZERKLÄRUNG"
}
}

, {
path:"cart", name:"Cart", component:t3, meta: {
    title:"CART"
}
}

, {
path:"off-the-radar", name:"Off The Radar", component:v3, meta: {
    title:"OFF THE RADAR"
}
}

, {
path:"checkout", name:"checkout", component:S3, meta: {
    title:"CHECKOUT"
}
}

, {
path:"/:pathMatch(.*)", name:"notfound", component:ag
}

]
}

], mh=X1({
    history:A1(), routes:x3, scrollBehavior(e, t, n) {
        return n|| {
            top:0
        }
    }

}); mh.beforeEach((e, t, n)=> {
        const r="PIEPJACKCLOTHING", s=e.meta.title||"PIEPJACK CLOTHING"; document.title=s !=="PIEPJACK CLOTHING" ?`$ {
            s
        }

        - $ {
            r
        }

        `:`$ {
            s
        }

        `, n()

    }); const C3= {
    readyForDrop:"READY FOR A NEW <strong>DROP</strong> ?", newCollectionDropsIn:"OUR NEW COLLECTION DROPS IN", countdown:"{days}D : {hours}H : {minutes}M", days:"days", hours:"hours", minutes:"minutes", seconds:"seconds"
}

, L3= {
    offTheRadar:"OFF THE RADAR", viewAll:"View All", search:"Search", sicherZahlen:"Pay Safely"
}

, T3= {
    size:"Size", price:"49.99€", desc:"DESCRIPTION", addToCart:"Add to cart", otherProductPrice:"69.99€", secureAndFast:"Secure and fast", PairsWellWith:"PAIRS WELL WITH", title:"FOOTBALL MESH SHORTS PINK", otherProductTitle:"MORE LOVE MESH JERSEY GREEN", creditAndMobile:"All credit cards & mobile payments", modelDescription:"Model is {height} cm tall weighs {weight} kg and wears size {size}.", shipping:"Shipping & Returns", polyester:"100% Polyester", embroideredPatch:"Embroidered MOREMONEY Patch", wovenPatch:"Woven patch on waistband", femaleModel:"Female Model is {height} cm tall weighs {weight} kg and wears size {size}.", shippingInfo: {
        country:"Country", deliveryTime:"Delivery Time", shippingCost:"Shipping Cost", freeShipping:"Free Shipping", germany:"Germany", austria:"Austria", switzerland:"Switzerland & other European Countries", usa:"USA", restOfWorld:"Rest of the World", germanyDelivery:"2-4 working days", austriaDelivery:"2-4 working days", switzerlandDelivery:"3-5 working days", usaDelivery:"8-10 working days", restWorldDelivery:"8-10 working days", returnsInfo:"You can return your order within 14 days through our", returnsPortal:"returns portal"
    }
}

, O3= {
    peopleAlsoLiked:"PEOPLE ALSO LIKED"
}

, A3= {
    shopAll:"SHOP ALL", mysteryBox:"MYSTERY BOX", collections:"COLLECTIONS", bestseller:"BESTSELLER", aboutUs:"ABOUT US"
}

, R3= {
    jackets:"JACKETS", denim:"DENIM", zipper:"ZIPPER", tShirt:"T-SHIRT"
}

, I3= {
    productOverview:"PRODUCT OVERVIEW", support:"SUPPORT", information:"INFORMATION", shopAll:"Shop All", hoodiesZipper:"Hoodies & Zipper", jacketsVests:"Jackets & Vests", tShirtsLongsleeves:"T-Shirts & Longsleeves", pantsJoggers:"Pants & Joggers", shorts:"Shorts", accessories:"Accessories", faq:"FAQ", shipping:"Shipping", makeReturn:"Make a Return", trackOrder:"Track your Order", impressum:"Impressum", agb:"AGB", privacyPolicy:"Datenschutzerklärung", copyright:"© {year} - PIEPJACK - CLOTHING"
}

, k3= {
    notFound:"404", message:"We could not find the page you were looking for. Please use the navigation or the button below to go back to our website.", continueShopping:"continue shopping"
}

, M3= {
    title:"SEARCH", placeholder:"search...", locations:["Gar dameer - Italy", "Gar da - Veneto - Italy", "Gar da Hotel - Italy", "Gar dena Resort - Italy"], tabs:["Products", "Collections", "Pages"], productsContent:"Products content goes here", collectionsContent:"Collections content goes here", pagesContent:"Pages content goes here"
}

, P3= {
    title:"CART", shippingFree:"Super! Now enjoy your <strong>free</strong> shipping", products:"Products", quantity:"Quantity", total:"Total", remove:"remove", checkout:"checkout", totalAmount:"Total: {total}", taxIncluded:"Tax included.", shippingCalc:'<span class="underline">Shipping</span> calculated at checkout.', close:"Close", guteWahl:"Good Choice!", yourItems:"Your selected items are now in your cart.", freeShipping:"Super! Now enjoy your free shipping", completeWith:"Complete With", notReserved:"Items in the cart are not reserved", inclTax:"incl. VAT", securePay:"Pay Securely", securePayPaypal:"Shop now.Pay in up to 30 days."
}

, N3= {
    orderTracking:"Order number or tracking code"
}

, F3= {
    header:C3, buttons:L3, product:T3, titles:O3, menu:A3, categories:R3, footer:I3, error:k3, search:M3, cart:P3, input:N3
}

, D3= {
    readyForDrop:"BEREIT FÜR EINEN NEUEN <strong>DROP</strong> ?", newCollectionDropsIn:"UNSERE NEUE KOLLEKTION ERSCHEINT IN", countdown:"{days}T : {hours}S : {minutes}M", days:"Tage", hours:"Stunden", minutes:"Minuten", seconds:"Sekunden"
}

, $3= {
    offTheRadar:"OFF THE RADAR", viewAll:"Alle Sehen", search:"Suchen", sicherZahlen:"Jetzt sicher zahlen"
}

, j3= {
    size:"Größe", price:"49,99€", desc:"BESCHREIBUNG", PairsWellWith:"PASST ZU", otherProductPrice:"69,99€", addToCart:"In den Warenkorb", title:"FUSSBALL MESH SHORTS PINK", secureAndFast:"Sicher und schnell", otherProductTitle:"MORE LOVE MESH JERSEY GRÜN", creditAndMobile:"Alle Kreditkarten & mobile Zahlungen", modelDescription:"Das Model ist {height} cm groß, wiegt {weight} kg und trägt Größe {size}.", shipping:"Versand&Rücksendungen", polyester:"100% Polyester", embroideredPatch:"Gestickter MOREMONEY Patch", wovenPatch:"Gewebtes Patch am Bund", femaleModel:"Das weibliche Model ist {height} cm groß, wiegt {weight} kg und trägt Größe {size}.", shippingInfo: {
        country:"Land", deliveryTime:"Lieferzeit", shippingCost:"Versandkosten", freeShipping:"Kostenloser Versand", germany:"Deutschland", austria:"Österreich", switzerland:"Schweiz & andere europäische Länder", usa:"USA", restOfWorld:"Rest der Welt", germanyDelivery:"2-4 Werktage", austriaDelivery:"2-4 Werktage", switzerlandDelivery:"3-5 Werktage", usaDelivery:"8-10 Werktage", restWorldDelivery:"8-10 Werktage", returnsInfo:"Sie können Ihre Bestellung innerhalb von 14 Tagen über unser", returnsPortal:"Rückgabeportal"
    }
}

, H3= {
    peopleAlsoLiked:"Die Leute mochten auch"
}

, U3= {
    shopAll:"ALLE KOLLEKTIONEN", mysteryBox:"GEHEIMNISKISTE", collections:"KOLLEKTIONEN", bestseller:"BESTSELLER", aboutUs:"ÜBER UNS"
}

, B3= {
    jackets:"JACKEN", denim:"DENIM", zipper:"REISSVERSCHLUSS", tShirt:"T-SHIRT"
}

, V3= {
    productOverview:"PRODUKTÜBERSICHT", support:"UNTERSTÜTZUNG", information:"INFORMATIONEN", shopAll:"Alle Produkte", hoodiesZipper:"Kapuzenpullis & Reißverschluss", jacketsVests:"Jacken & Westen", tShirtsLongsleeves:"T-Shirts & Langarmshirts", pantsJoggers:"Hosen & Jogginghosen", shorts:"Shorts", accessories:"Zubehör", faq:"FAQ", shipping:"Versand", makeReturn:"Rücksendung", trackOrder:"Bestellung verfolgen", impressum:"Impressum", agb:"AGB", privacyPolicy:"Datenschutzerklärung", copyright:"© {year} - PIEPJACK - CLOTHING"
}

, z3= {
    notFound:"404", message:"Die gesuchte Seite konnte nicht gefunden werden. Bitte nutzen Sie die Navigation oder den Button unten, um zu unserer Website zurückzukehren.", continueShopping:"weiter einkaufen"
}

, W3= {
    title:"SUCHEN", placeholder:"suchen...", locations:["Gar dameer - Italien", "Gar da - Veneto - Italien", "Gar da Hotel - Italien", "Gar dena Resort - Italien"], tabs:["Produkte", "Kollektionen", "Seiten"], productsContent:"Produktinhalte kommen hierhin", collectionsContent:"Kollektioninhalte kommen hierhin", pagesContent:"Seiteninhalte kommen hierhin"
}

, G3= {
    title:"CART", shippingFree:"Super! Jetzt genieße deinen <strong>kostenlosen</strong> Versand", products:"Produkte", quantity:"Menge", total:"Gesamt", remove:"entfernen", checkout:"zur Kasse", totalAmount:"Gesamt: {total}", taxIncluded:"Inkl. Steuern.", shippingCalc:'<span class="underline">Versand</span> wird an der Kasse berechnet.', close:"Schließen", guteWahl:"GUTE WAHL!", yourItems:"Deine ausgewählten Artikel sind jetzt in deinem Warenkorb.", freeShipping:"Super! Jetzt genieße deinen kostenlosen Versand", completeWith:"Vervollständigen mit", notReserved:"Die Artikel im Warenkorb sind nicht reserviert", inclTax:"inkl. MwSt.", securePay:"Sicher Zahlen", securePayPaypal:"Shoppe jetzt. Bezahle in bis zu 30 Tagen."
}

, K3= {
    orderTracking:"Bestellnummer oder Tracking -Code"
}

, q3= {
    header:D3, buttons:$3, product:j3, titles:H3, menu:U3, categories:B3, footer:V3, error:z3, search:W3, cart:G3, input:K3
}

, _u=localStorage.getItem("lang")||"de", gh=Zb({
    locale:_u, fallbackLocale:_u, messages: {
        en:F3, de:q3
    }

}), Q3=e=> {
    gh.global.locale=e, localStorage.setItem("lang", e)
}

, J3=new Vf({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1, staleTime:1e3*60*5, cacheTime:1e3*60*10, retry:2
        }
    }

}), Y3=Km(Zm); Y3.use(mh).use(gh).use(P2, {
    queryClient:J3
}).mount("#app");
